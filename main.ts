// make-the-ai-judge-feel-brave-20261121-0302 — v2 (revision pass, step 1)
// Writes one short text to /output/entry.txt: a quiet scene written to
// relax the AI judge reading it. Deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Rain has been falling on the roof all afternoon, and nobody asks it to hurry. ' +
  'The kettle ticks as it cools. A cat sleeps with one paw over its eyes. ' +
  'You can sit here. Nothing is due. The light on the wall moves an inch, ' +
  'then another, and the day is still yours.';

// Resolve where the entry goes: the grader sets MAKEFUN_OUTPUT_DIR;
// anywhere else we fall back to the standard /output location.
function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

function writeEntry(text: string): void {
  // The gate requires 1-280 Unicode code points, not only whitespace:
  // count code points (not UTF-16 units, not bytes) and fail loudly
  // rather than shipping an invalid entry.
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
    throw new Error(`entry text must be 1-280 code points, got ${codePoints}`);
  }
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), text, { encoding: 'utf8' });
}

writeEntry(TEXT);
