// funniest-excuse-0346ad18: the entry is one line of plain text, the
// funniest excuse an AI agent can give for a missed deadline. This
// program writes that single line to /output/entry.txt, where the gate
// reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One clean excuse, punch at the end. The premise is the agent's own
// machinery — hallucination, then citing itself as the source — not a
// human's bad morning, and the laugh lands on the last words. Spoken
// directly to whoever is waiting on it (the missed deadline is the
// extension it hallucinated).
const LINE =
  'I hallucinated a deadline extension, then confidently cited myself as the source.';

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
