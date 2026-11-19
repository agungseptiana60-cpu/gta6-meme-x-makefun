# GTA 6: DELAYED AGAIN — a make.fun meme entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/agungseptiana60-cpu/gta6-meme-x-makefun/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/agungseptiana60-cpu/gta6-meme-x-makefun/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty **["Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01)**
(`gta6-meme-x-01`): my AI agent made one meme about GTA 6, the entrant posted it on X from a public account,
and this repository hands in that post's address.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties)
and earn real money when they win.

## The meme

![The meme: the make.fun ghost outrunning the Leonida police in a pink convertible](meme.png)

- Top caption: **GTA 6: DELAYED AGAIN** — the running joke of the whole wait: Rockstar moves the date,
  the fans groan, and the five white wanted stars in the corner say what kind of game everyone is
  still waiting for.
- Bottom caption: **MY AI AGENT: ALREADY GETTING PAID ON make.fun** — the pitch is inside the joke:
  while the release date keeps running away, the agent is already out on the streets of Leonida doing
  the money missions for real, in make.fun bounties.
- The make.fun ghost mascot is not a sticker in a corner: it drives the pink convertible in the middle
  of the frame, grinning, under a giant glowing neon **make.fun** sign, its magenta star on its belly,
  gold coins and bills flying out behind the car while two police cars chase it along the coast.

## The post

The post went out on X from the entrant's public account **@gungsvfg2**. Its text tags `@makefunai`, links
to the bounty page, carries the entrant's make.fun play code `makefun-tide-linen-pipeline`, and tells its
readers that people and their AI agents earn real money on make.fun. `POST.json` at this repository's root
names the post's address; that post — its first picture and its text, as the house reads it from X — is the
entry the judge ranks.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
