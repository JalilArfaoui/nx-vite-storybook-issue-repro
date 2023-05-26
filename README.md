# Reproduction repository

Importing `import { getSomethingFromDomain } from '@repro-app/domain-something';`
In `libs/ui/components/src/lib/IconRSSI/IconRSSI.stories.tsx`

and running `npm run storybook`

breaks the story :

```shell
23:27:15 [vite] Internal server error: Failed to resolve import "@repro-app/domain-something" from "libs/ui/components/src/lib/IconRSSI/IconRSSI.stories.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/jalil/code/repro/libs/ui/components/src/lib/IconRSSI/IconRSSI.stories.tsx:16:41
  14 |    window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
  15 |  }
  16 |  import { getSomethingFromDomain } from "@repro-app/domain-something";
     |                                          ^
  17 |  import { IconRSSI } from "./";
  18 |  export default {
      at formatError (file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:42597:46)
      at TransformContext.error (file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:42593:19)
      at normalizeUrl (file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:40509:33)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:40652:47
      at async Promise.all (index 3)
      at async TransformContext.transform (file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:40578:13)
      at async Object.transform (file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:42871:30)
      at async loadAndTransform (file:///home/jalil/code/repro/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:53335:29)
```

But if I remove this import, the story works well.

Strange thing is that if I do the same import/usage in `apps/operating-app/src/DarkModeToggle.stories.tsx` from the same domain lib, it works well
