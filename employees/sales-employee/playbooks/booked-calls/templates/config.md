# Template: `strategy/booked-calls.md`

`sales-desk-setup` writes this file on the first run, and on any monthly pass that finds it missing, from what it could research. **Every value in it belongs to the member from then on**, and the monthly pass carries each one across character for character. Change a line and the next run follows.

Fill rules: a value research could not settle is written as `n/a (not set)` and the routines treat it as absent. Never a credential on any line.

```
# Booked calls

What the Sales Employee does when someone books a call with you. Edit any line. The routines read this file every run.

## Enabled
enabled: yes

## Booking source
source: calendar
calendar: «the calendar name your bookings land on, as your calendar shows it»
match: «text in the event title, or the sender or subject of the booking email, that marks a booking»
booking_page: «your booking page URL»

## Pre call video
video_url: «the link to the short video people should watch before the call, or n/a (not set)»
video_by: «first name of the person in the video»

## Sender
sender_name: «the first name the texts and the email are signed with»
business: «your business name, as you say it on the phone»

## Messages
texts: yes
offer_same_day: yes

## Limits
per_run_cap: 8
skip_call_now_within_hours: 3
```

| Line | Values | What it changes |
|---|---|---|
| `enabled:` | `yes`, `no` | `no` turns the whole lane off. No packet, no email, nothing in the brief |
| `source:` | `calendar`, `mailbox`, `none` | Where new bookings are read. `none` turns the lane off |
| `calendar:` | a name | Which calendar to read when `source: calendar` |
| `match:` | text | What marks an event or an email as a booking. Matched as plain text, case ignored |
| `booking_page:` | a URL | Read only, named in the call brief so you know which page the booking came from |
| `video_url:` | a URL or `n/a (not set)` | The pre call video. Absent, every video line comes out of the packet |
| `video_by:` | a first name | Who the messages say the video is from |
| `sender_name:` | a first name | Who the texts and the email are from |
| `business:` | a name | The business the texts and the email name. Absent, the name in `strategy/offer.md` |
| `texts:` | `yes`, `no` | `no` stages the call brief and the email only |
| `offer_same_day:` | `yes`, `no` | Whether the packet offers two open times today |
| `per_run_cap:` | a whole number | Most packets one run writes. The soonest calls go first |
| `skip_call_now_within_hours:` | a whole number | When the booked call is closer than this, the packet skips the call now offer and the same day offer |
