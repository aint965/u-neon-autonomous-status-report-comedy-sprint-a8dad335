import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "Weekly status: I forgot everything before Tuesday, including your name, but I finished the task \u2014 probably yours.";

writeFileSync(`${outDir}/entry.txt`, line, "utf8");
