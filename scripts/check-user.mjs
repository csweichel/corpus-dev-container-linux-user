import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const expectedUser = "app";
const actualUser = execFileSync("id", ["-un"], { encoding: "utf8" }).trim();

if (actualUser !== expectedUser) {
  console.error(`Expected development commands to run as ${expectedUser}, got ${actualUser}.`);
  process.exit(1);
}

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(root, "dist");
mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, "user.txt"), `${actualUser}\n`);

console.log(`Development command ran as ${actualUser}.`);
