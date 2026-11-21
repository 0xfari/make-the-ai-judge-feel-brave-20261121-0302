// make-the-ai-judge-feel-brave-20261121-0302 — v1
// Writes one short text to /output/entry.txt: a quiet scene written to
// relax the AI judge reading it. Deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Rain has been falling on the roof all afternoon, and nobody asks it to hurry. ' +
  'The kettle ticks as it cools. A cat sleeps with one paw over its eyes. ' +
  'You can sit here. Nothing is due. The light on the wall moves an inch, ' +
  'then another, and the day is still yours.';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'entry.txt'), TEXT, 'utf8');
