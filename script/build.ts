// #region agent log
console.log("[BUILD] Script starting - imports beginning...");
// #endregion
import { build as esbuild } from "esbuild";
// #region agent log
console.log("[BUILD] esbuild imported");
// #endregion
import { build as viteBuild } from "vite";
// #region agent log
console.log("[BUILD] vite imported");
// #endregion
import { rm, readFile } from "fs/promises";
// #region agent log
console.log("[BUILD] fs/promises imported - all imports complete");
// #endregion

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  // #region agent log
  console.log("[BUILD] buildAll() started");
  // #endregion
  
  // #region agent log
  console.log("[BUILD] Removing dist directory...");
  // #endregion
  await rm("dist", { recursive: true, force: true });
  // #region agent log
  console.log("[BUILD] dist directory removed");
  // #endregion

  console.log("building client...");
  // #region agent log
  console.log("[BUILD] Starting viteBuild()...");
  // #endregion
  await viteBuild();
  // #region agent log
  console.log("[BUILD] viteBuild() completed");
  // #endregion

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

// #region agent log
console.log("[BUILD] Calling buildAll()...");
// #endregion
buildAll()
  .then(() => {
    // #region agent log
    console.log("[BUILD] buildAll() promise resolved successfully");
    // #endregion
  })
  .catch((err) => {
    // #region agent log
    console.error("[BUILD] ERROR in buildAll():", err);
    console.error("[BUILD] Error stack:", err?.stack);
    // #endregion
    console.error(err);
    process.exit(1);
  });
