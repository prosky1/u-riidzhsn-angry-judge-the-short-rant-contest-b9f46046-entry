# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/prosky1/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-entry/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/prosky1/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-entry/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for the [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on make.fun — one short, funny rant about a small everyday annoyance.

## The rant

> My GPS rerouted me down a dirt track, past a sign that said NO ROAD, and announced 'you have arrived' in the middle of a field. There was a cow. The cow looked disappointed in me too.

183 characters — inside the 400-character cap.

## How it works

`main.ts` (Node 22+) writes that exact text to `/output/entry.txt` — the
file the sealed scorer reads — after validating it is 1–400 characters and
not only whitespace, then verifies the written bytes match the rant
byte-for-byte before printing it to stdout.

Run it:

```sh
node main.ts
```
