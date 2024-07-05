/* Resolves the following issues
 *Source: https://stackoverflow.com/questions/60124435/however-this-package-itself-specifies-a-main-module-field-that-could-not-be-r
 * Error: => However, this package itself specifies a `main` module field that could not be resolved
 *
 */

const { getDefaultConfig } = require("metro-config");
const path = require('path');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "js", "jsx", "tsx", "cjs", "svg"],
    },
    watchFolders: [path.resolve(__dirname, 'node_modules')],
  };
})();
