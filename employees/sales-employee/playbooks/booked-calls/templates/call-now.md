# Template: the call now block

Prompts for the member while the phone rings. Short lines to glance at, never a script to read out. Checked with `copy-check.mjs --dest plain`.

Fill rules:
- Leave the block out where the call starts within `skip_call_now_within_hours:`.
- `{{call_when}}` is `{{call_day}} at {{call_time}} {{zone}}` where the booking gave their zone, and `{{call_day}}` alone where it did not.
- The video lines come out where no `video_url:` is set.

```
### call now
Prompts, not a script. Say it your own way.
- Hi {{first_name}}, it's {{sender_name}} from {{business}}. How are you doing?
- I had a few minutes between meetings and wanted to say I'm looking forward to {{call_when}}. Did the calendar invite come through OK?
- I've actually got a gap right now. Would it be easier to just talk now?
If yes: go to the outline in the call brief.
If no:
- No problem. Could I ask three quick questions, so the call is about you? (the three in the call brief)
- Did you get a chance to see the short video from {{video_by}} that came after you booked?   [only if: video]
- If not: send the video text below, then ask: is there anything that might stop you watching it before we talk?   [only if: video]
- Great, {{first_name}}. Talk on {{call_day}}. Have a good rest of your day.
If no answer: send the texts below.
```

The video text the member sends when the person has not seen it, written with `- text:` like every text block:

```
### video text
- text: Here's the short video I mentioned, from {{video_by}}: {{video_url}}
```
