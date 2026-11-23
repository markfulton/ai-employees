"""Turn the README wordmark text into SVG path outlines, so the animated logo
needs no web font (GitHub serves README SVGs through an image proxy that loads
nothing). Writes assets/src/wordmark-glyphs.json, which logo-motion.mjs reads.

Run once when the wordmark text or fonts change:
  python wordmark-glyphs.py <Montserrat-ExtraBold.ttf> <JetBrainsMono[wght].ttf>
Both fonts are SIL Open Font License; the outlines of set text may be embedded.
"""
import json, sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.varLib.instancer import instantiateVariableFont

OUT = Path(__file__).resolve().parent / "wordmark-glyphs.json"


def kern_pairs(font):
    """Pair kerning from GPOS PairPos format 1 and 2, first lookup set only."""
    pairs = {}
    if "GPOS" not in font:
        return pairs
    gpos = font["GPOS"].table
    for lookup in gpos.LookupList.Lookup:
        for st in lookup.SubTable:
            if lookup.LookupType == 9:
                st = st.ExtSubTable
            if getattr(st, "LookupType", lookup.LookupType) != 2 and lookup.LookupType not in (2, 9):
                continue
            if not hasattr(st, "Format") or not hasattr(st, "Coverage"):
                continue
            firsts = st.Coverage.glyphs
            if st.Format == 1:
                for i, g1 in enumerate(firsts):
                    for rec in st.PairSet[i].PairValueRecord:
                        v = getattr(rec.Value1, "XAdvance", 0) or 0
                        if v:
                            pairs.setdefault((g1, rec.SecondGlyph), v)
            elif st.Format == 2:
                cd1 = st.ClassDef1.classDefs
                cd2 = st.ClassDef2.classDefs
                for g1 in firsts:
                    c1 = cd1.get(g1, 0)
                    row = st.Class1Record[c1].Class2Record
                    for g2, c2 in cd2.items():
                        v = getattr(row[c2].Value1, "XAdvance", 0) or 0
                        if v:
                            pairs.setdefault((g1, g2), v)
    return pairs


def set_text(font, text, size, tracking_em):
    """Lay out one line at the given px size. Returns path data per glyph and the width."""
    upem = font["head"].unitsPerEm
    scale = size / upem
    cmap = font.getBestCmap()
    gs = font.getGlyphSet()
    hmtx = font["hmtx"]
    pairs = kern_pairs(font)
    names = [cmap[ord(ch)] for ch in text]
    x = 0.0
    glyphs = []
    for i, (ch, name) in enumerate(zip(text, names)):
        pen = SVGPathPen(gs, lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        # Font units are y up; SVG is y down. Baseline sits at y = 0.
        gs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        d = pen.getCommands()
        adv = hmtx[name][0] * scale
        if i + 1 < len(names):
            adv += pairs.get((name, names[i + 1]), 0) * scale
        adv += tracking_em * size
        if d:
            glyphs.append({"ch": ch, "x": round(x, 2), "d": d})
        x += adv
    return {"glyphs": glyphs, "width": round(x - tracking_em * size, 2)}


def main():
    name_font = TTFont(sys.argv[1])
    mono = TTFont(sys.argv[2])
    if "fvar" in mono:
        mono = instantiateVariableFont(mono, {"wght": 500})
    data = {
        "name": set_text(name_font, "AI Employees", 68, -0.03),
        "nameCapHeight": round(name_font["OS/2"].sCapHeight * 68 / name_font["head"].unitsPerEm, 2),
        "tag": set_text(mono, "OPEN SOURCE · BY REINVENTING.AI", 17, 0.2),
        "source": "Montserrat ExtraBold 68px tracking -0.03em; JetBrains Mono 500 17px tracking 0.2em",
    }
    OUT.write_text(json.dumps(data, indent=1), encoding="utf-8")
    print("wrote", OUT, "name width", data["name"]["width"], "tag width", data["tag"]["width"])


if __name__ == "__main__":
    main()
