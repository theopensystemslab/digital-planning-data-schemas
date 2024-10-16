# Digital planning data schemas docs

This is an experimental subfolder for JSON Schema viewers & documentation generators.

We're currently trying out [@stoplight/json-schema-viewer](https://github.com/stoplightio/json-schema-viewer) on top of a basic [vite/react-ts](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) starter site.

## Local dev

```
pnpm i
pnpm dev
```

## Deployment

The docs viewer is currently deployable, but at the expense of the existing JSON files that are deployed from the `dist` branch. 

### To deploy the schema viewer:

1. Go to Settings -> Pages
2. Under `Build and deployment` switch the `Source` to `GitHub Actions`.
3. This should trigger a deployment action.
4. Once finished, the schema viewer should be visible at `"https:/theopensystemslab.github.io/digital-planning-data-schemas"`. 

### To deploy the JSON files:

1. Go to Settings -> Pages
2. Under `Build and deployment` switch the `Source` to `Deploy from a branch`.
3. Change the branch to `dist`. 
4. Make sure you select `/root` for the folder, and press 'Save'.
5. This should trigger a deployment action.
4. Once finished, the JSON files should be visible at `https://theopensystemslab.github.io/digital-planning-data-schemas/<VERSION>/schemas/<SCHEMA>.json`. 

