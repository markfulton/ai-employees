# Booked calls

What the Sales Employee does when someone books a call with you. Edit any line. The routines read this file every run.

## Enabled
enabled: yes

## Booking source
source: calendar
calendar: Northwind bookings
match: Roof inspection call
booking_page: https://example.com/northwind/book

## Pre call video
video_url: https://example.com/northwind/before-your-call
video_by: Sam

## Sender
sender_name: Sam
business: Northwind Roofing

## Messages
texts: yes
offer_same_day: yes

## Limits
per_run_cap: 8
skip_call_now_within_hours: 3
