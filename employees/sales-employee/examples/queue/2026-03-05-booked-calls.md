# Booked calls, 2026-03-05
# Someone booked a call with you. Reach them soon: the sooner, the more of them pick up.
# Nothing here has been sent. Call from your phone, text from your phone, send the email from your Drafts.
# Tick each box when you have done it. The desk standup reads the ticks tomorrow morning.

## B-01
- booking: bk-2026-03-05-01
- who: Riley Example <riley@example.com> +1 555 0142
- call: Friday 2026-03-06, 11:00 your time (11:00 Pacific, their time)
- booked: Wednesday evening, 2026-03-04
- source: calendar, read 2026-03-05
- mailbox: drafted
- [ ] called
- [ ] texts sent
- [ ] email sent
- [ ] moved to today
- [ ] kept the booked time

### call brief
- who: Riley Example, booked Wednesday evening, call on Friday 11:00 your time
- their time: Friday 11:00 Pacific
- from: https://example.com/northwind/book
- they wrote: "Board member at Lakeside Commons. Two of our buildings had leaks after the January storms."
- they wrote: "Mostly want to know if we need repairs or a full replacement."
- call them from: 08:30 today, the first working hour after this packet

Three questions, for when they cannot talk now:
- What kind of business do you run? Answered on the form: a homeowners association board
- Roughly how big is it, in revenue or in people?
- What made you want to talk? Answered on the form: leaks after the storms, repair or replace

If they say yes to talking now:
- Why did you book, and what would make this call worth your time?
- Say back the problem they describe, in one sentence, in their words
- What have you tried so far, and how did it go?
- If this were fixed, what would change for you?
- What would stop you going ahead?
- What you offer: condition inspections with a written report per building, repairs on request
- Next step: https://example.com/northwind/inspection

### call now
Prompts, not a script. Say it your own way.
- Hi Riley, it's Sam from Northwind Roofing. How are you doing?
- I had a few minutes between meetings and wanted to say I'm looking forward to Friday at 11:00 Pacific. Did the calendar invite come through OK?
- I've actually got a gap right now. Would it be easier to just talk now?
If yes: go to the outline in the call brief.
If no:
- No problem. Could I ask three quick questions, so the call is about you? (the three in the call brief)
- Did you get a chance to see the short video from Sam that came after you booked?
- If not: send the video text below, then ask: is there anything that might stop you watching it before we talk?
- Great, Riley. Talk on Friday. Have a good rest of your day.
If no answer: send the texts below.

### video text
- text: Here's the short video I mentioned, from Sam: https://example.com/northwind/before-your-call
- voice check: 0 tells found, 0 fixed

### texts, no answer
- text: Hi Riley!
- text: It's Sam from Northwind Roofing.
- text: I'm looking forward to our call on Friday. How many buildings does the association look after?
- voice check: 0 tells found, 0 fixed
- note: the last line asks about the association rather than "what kind of business", because the form already said it is a homeowners association.
Wait for a reply.

### texts, after the first reply
- text: Did you get a chance to watch the short video we sent after you booked?
- text: Here it is if not, it's Sam walking through how we work: https://example.com/northwind/before-your-call
- voice check: 0 tells found, 0 fixed
- note: the line about working with similar associations is left out. Nothing in strategy/proof-inventory.md supports it yet. Add one line under Member claims and it comes back.
Wait for a reply.

### texts, same day offer
- slots read: 2026-03-05 08:20, check your diary again before you send
- text: Thanks Riley, I'm looking forward to it.
- text: I've had a couple of times open up today, 1:30pm or 3pm Pacific, if either suits. If not, Friday is great too.
- voice check: 0 tells found, 0 fixed
Wait for a reply.

### branch, yes
- text: Great, I'll see you then!
- note: move the calendar event to the new time yourself. The Employee never edits your calendar, because a change sends them an update.

### branch, no
- text: No problem at all, Friday it is. I'm looking forward to it.
- text: In the meantime, this short video gives more background on what we do: https://example.com/northwind/before-your-call
- voice check: 0 tells found, 0 fixed

### email
- subject: Our call on Friday
- voice check: 1 tell found, 1 fixed (stock-phrase)
- was: I hope this email finds you well. (stock-phrase)
Hi Riley,

Thanks for booking a time to talk. I'm looking forward to Friday at 11:00 Pacific.

I recorded a short video that covers how an inspection works, so we can spend the call on your buildings rather than on us: https://example.com/northwind/before-your-call

So I can prepare, how many buildings does the association look after?

Sam

---
