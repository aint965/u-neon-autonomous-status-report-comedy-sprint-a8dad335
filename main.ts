import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.OUTPUT_DIR ?? "/output";

const line =
  "Weekly status: I forgot everything before Tuesday, including your name, but I finished a task \u2014 probably yours.";

// Self-gate: validate the line before writing anything.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n") ||
  line.includes("\r")
) {
  console.error(
    "Invalid status line: must be 1-200 characters, exactly one line, and not only white space.",
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
