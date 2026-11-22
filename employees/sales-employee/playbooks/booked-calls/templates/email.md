# Template: the confirmation email

Composed unsent into the member's Drafts folder in the calling routine's mailbox phase, as a new draft and never a reply in the booking tool's thread. Passes `copy-check.mjs --dest email` and `voice-check.mjs --kind email`.

Fill rules:
- Staged only where the booking has an email address and the person is not marked (PLAYBOOK section 4, check 3).
- The video paragraph comes out where no `video_url:` is set.
- Signed with `sender_name:`. One question, no other ask.

```
### email
- subject: Our call on {{call_day}}
Hi {{first_name}},

Thanks for booking a time to talk. I'm looking forward to {{call_when}}.

{{video_by}} recorded a short video that covers the basics, so we can spend the call on your business rather than on ours: {{video_url}}   [only if: video]

So I can prepare, what kind of business do you run?

{{sender_name}}
```
