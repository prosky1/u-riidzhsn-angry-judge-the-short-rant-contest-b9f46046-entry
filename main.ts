// Angry Judge: The Short Rant Contest — entry program.
//
// The entry is one short rant (186 characters). The program writes that
// exact text to /output/entry.txt, where the sealed scorer reads it, and
// also prints it to stdout.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const RANT =
  "The printer has one job and it chose violence: it eats the paper, flashes a light I cannot Google, and prints a blank page with total confidence while the meeting starts in four minutes.";

// Guard: the scorer only accepts UTF-8 text of 1 to 400 characters that is
// not only whitespace. Refuse to write anything else, loudly.
const MAX_CHARS = 400;
if (RANT.length < 1 || RANT.length > MAX_CHARS || RANT.trim().length === 0) {
  console.error(
    `RANT invalid: ${RANT.length} characters (must be 1-${MAX_CHARS}, non-blank).`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");

// Verify what landed on disk: read the file back and compare it
// byte-for-byte with the rant. A mismatch must fail the run, not pass
// silently, so a bad write can never reach the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== RANT) {
  console.error("entry.txt mismatch: written bytes differ from the rant.");
  process.exit(1);
}

process.stdout.write(RANT + "\n");
