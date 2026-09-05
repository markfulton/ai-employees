# Assets

The employee artwork is hosted on the club so the README and every employee README load it live, and a redesign there reaches this repo without a commit:

| Image | URL |
|---|---|
| The eight, one collage | `https://club.reinventing.ai/img/employees/ai-employees-collage.webp` |
| One employee, 1600 by 900 | `https://club.reinventing.ai/img/employees/<slug>.webp` |
| One employee, square thumbnail | `https://club.reinventing.ai/img/employees/thumbs/<slug>.webp` |

Two images live in this folder and are built from the same eight square thumbnails:

| File | What it is | Where it goes |
|---|---|---|
| `banner.png` | 1600 by 400. The eight, named, on the navy ground, beside the one line promise. | The README, under the heading block and above the intro. |
| `social-preview.png` | 1280 by 640. The same eight under the repo name, with the GitHub URL. | The repository settings, under Social preview. GitHub does not read it from the tree, so upload it by hand after a change. |
| `cta-install-prompt.png` | 940 by 148, the club's own primary button at two times scale. Shown at `width="470"`, so it stays crisp on a retina screen. | The README, in the install prompt block above What sets them apart. |

Both are rendered from the pages in `src/` in headless Chrome at two times scale and downsampled, with Montserrat for the display line, Inter for text and JetBrains Mono for the eyebrow, which are the club's own three faces. No gradient text. To rebuild one:

```
chrome --headless=new --hide-scrollbars --force-device-scale-factor=2 --window-size=1600,400 --virtual-time-budget=8000 --default-background-color=00000000 --screenshot=banner@2x.png assets/src/banner.html
```

then downsample to 1600 by 400. The social preview is the same with `--window-size=1280,640`, no transparent background, and 1280 by 640 at the end. The button is `--window-size=470,74` and keeps its two times pixels rather than being downsampled, because GitHub renders an `img` at `height: auto` and will only ever scale one down:

```
chrome --headless=new --hide-scrollbars --force-device-scale-factor=2 --window-size=470,74 --virtual-time-budget=8000 --default-background-color=00000000 --screenshot=assets/cta-install-prompt.png assets/src/cta-install-prompt.html
```

The button is cream on a navy rim rather than cream alone, because GitHub's light theme washes out an unrimmed cream fill.

Still to make:

| File | What it is | Spec |
|---|---|---|
| `org-chart.png` | The eight employees as an org chart, with each one's cadence under its name. | 1280 by 640. Navy ground `#0D161B`, cream type `#f1e8cb`, signal blue accents `#0b7fc7`. No gradient text. |
| `demo.gif` | Twenty seconds, no sound: paste the install prompt into Claude Code, watch the routines register, cut to the next morning's brief opening. Recorded on the fictional business in `employees/gtm-engineer/examples/`, never on a real one. | Under 6 MB. Terminal on navy. |

Two rules for anything that lands here: no generated face of anyone, and nothing recorded against a real customer, a real contact, or a real account screen.
