# Reproduction for vite case sensitivity issue

When you make a case based typo in an import vite's hmr fails to recompile that file. This is only really an issue on case insensitive file systems like the default one on MacOS

## How to reproduce this

1. Start dev server (yarn dev) or just by running `vite --open` in this folder
2. Open the home page (should happen automatically given the --open flag)
3. Change anything in the src/Button component
4. See that nothing happens

## How to fix the issue

Rename the import in `main.tsx` from `import { Button } from "./button";` to `import { Button } from "./Button";`
