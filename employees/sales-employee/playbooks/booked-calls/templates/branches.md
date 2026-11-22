# Template: the two branch messages

The member uses one of these after the same day offer, depending on the answer. Each text passes `copy-check.mjs --dest dm`, and each block passes `voice-check.mjs --kind dm` as one piece.

Fill rules:
- `branch, yes` is staged only where the same day offer is. Its note is for the member and is never sent.
- `branch, no` carries the video link only where a video is set.

```
### branch, yes
- text: Great, I'll see you then!
- note: move the calendar event to the new time yourself. The Employee never edits your calendar, because a change sends them an update.

### branch, no
- text: No problem at all, {{call_day}} it is. I'm looking forward to it.
- text: In the meantime, this short video gives more background on what we do: {{video_url}}   [only if: video]
```
