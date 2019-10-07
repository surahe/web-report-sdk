import rollup from 'rollup'
import BaseConfig from "./rollup.config.base";
import { name } from "../package.json";

const watchOptions = {
  ...BaseConfig,
  output: [
    {
      file: `dev/bundle.js`,
      format: "umd",
      name
    }
  ],
};

const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error
});

export default [
  {
    ...BaseConfig,
    output: [
      {
        file: `dev/bundle.js`,
        format: "umd",
        name
      }
    ],
    plugins: [...BaseConfig.plugins],
  }
];
