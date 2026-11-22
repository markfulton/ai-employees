# Template: the text blocks

Each `- text:` line is one message. The member sends them one after another from their own phone and waits where the block says to wait. Each message passes `copy-check.mjs --dest dm`, and `booked-call-check.mjs` holds each one to the house cap for a single message. `voice-check.mjs --kind dm` runs on each block as one piece, its messages one per line, because the person reads them as one conversation and a single short text has no room for a person in it.

Fill rules:
- Leave every text block out where the booking has no phone number, where `texts: no` is set, or where the person is marked (PLAYBOOK section 4, check 3).
- No link in `texts, no answer`. The video link only ever travels in its own message.
- `{{similar_line}}` only from `strategy/proof-inventory.md` (PLAYBOOK section 6.2). Absent, cut the line.
- The same day block only where `offer_same_day: yes` and the call is on a later day than today.

```
### texts, no answer
- text: Hi {{first_name}}!
- text: It's {{sender_name}} from {{business}}.
- text: I'm looking forward to our call on {{call_day}}. What kind of business do you run?
Wait for a reply.

### texts, after the first reply
- text: {{similar_line}}   [only if: the proof inventory supports it]
- text: Did you get a chance to watch the short video we sent after you booked?   [only if: video]
- text: Here it is if not, it's {{video_by}} walking through how we work: {{video_url}}   [only if: video]
Wait for a reply.

### texts, same day offer
- slots read: {{slots_read_at}}
- text: Thanks {{first_name}}, I'm looking forward to it.
- text: I've had a couple of times open up today, {{slot_one}} or {{slot_two}}, if either suits. If not, {{call_day}} is great too.
Wait for a reply.
```

Where the booked call starts within `skip_call_now_within_hours:`, the blocks above are replaced by one:

```
### texts, short notice
- text: Hi {{first_name}}, {{sender_name}} from {{business}}. Looking forward to talking {{call_when}}. Did the invite come through OK?
```
