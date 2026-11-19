// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry itself is the X post: my agent made the meme picture in this session, the
// entrant posted it from their public X account, and POST.json in this repository names
// that post's address. The house reads the post from X and the judge sees its first
// picture and its text. All this program has to do is hand the address over: copy
// POST.json from the repository root into the output directory the grader points at.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for the
// repository and output mounts:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(repoDir, 'POST.json');
const target = join(outputDir, 'POST.json');

// Fail loudly on a malformed hand-in instead of copying it through: POST.json must be a
// JSON object whose "url" is an X post address, the only thing the gate can read.
let post: { url?: unknown };
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch (error) {
  console.error(`POST.json in ${repoDir} is not readable JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (typeof post.url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json "url" is not an X post address: ${String(post.url)}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy POST.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
