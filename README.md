# mono
This is a boilerplate for a monorepo using `Yarn Berry`. It includes a design system package (`@mono/ui`) built with `Storybook`, `Vite` and `TailwindCSS`. 


### Install Dependencies
To enable zero-install support, we utilize `.yarn/cache`. However, the specific dependencies you need might differ depending on your setup. To ensure the correct dependencies for your setup, it's recommended to run either `yarn` or `yarn install` first !
```bash
yarn
```

If you require different dependencies, running `yarn` might yield results like these:

```yaml
❯ yarn
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 616ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ @esbuild/darwin-x64@npm:0.18.18 can't be found in the cache and will be fetched from the remote registry
➤ YN0013: │ @next/swc-darwin-x64@npm:13.4.13 can't be found in the cache and will be fetched from the remote registry
➤ YN0000: └ Completed in 23s 926ms
➤ YN0000: ┌ Link step
➤ YN0000: │ ESM support for PnP uses the experimental loader API and is therefore experimental
➤ YN0007: │ esbuild@npm:0.18.18 must be built because it never has been before or the last one failed
➤ YN0000: └ Completed in 3s 367ms
➤ YN0000: Done with warnings in 28s 128ms
```

### Build UI package
To build the UI package, use this command:

```bash
yarn ui build
```

### Run App
To start the development server and access the app, use this command:

```bash
yarn app dev
```
This will launch a development server at `http://localhost:3000`.

For additional scripts, refer to the `package.json` files.

