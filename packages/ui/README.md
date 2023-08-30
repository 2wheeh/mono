# @mymono/ui
### React + TypeScript + TailwindCSS + Storybook
1. `@mymono/ui` provides UI components built with React, TypeScript and TailwindCSS.
2. Components in `@mymono/ui` are on [storybook](https://mymono-ui.vercel.app/)

### Installation
Install the package using your preferred package manager. Open your terminal and run:
```bash
yarn add @mymono/ui
```

### Addiing styles
In your project's CSS or global styles file (e.g., `globals.css`), import the package's styles as shown below:
```ts
// packages/app/src/styles/globals.css

import '@mymono/ui/styles.css'
```

### Use tailwind config as a preset
You can use the TailwindCSS configuration provided by `@mymono/ui` as a preset.

To achieve this, add `'@mymono/ui/tailwind.config'` on `presets` field in `tailwind.config.js` or `tailwind.config.ts` file as shown below:
```ts
//  packages/app/tailwind.config.ts

const config: Config = {
  presets: [require('@mymono/ui/tailwind.config')],
  //... (other configuration options)
}
```

