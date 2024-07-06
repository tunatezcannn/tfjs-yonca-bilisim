const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  defaultConfig.transformer = {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  };

  defaultConfig.resolver = {
    ...defaultConfig.resolver,
    assetExts: [...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), 'bin'],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg', 'd.ts'],
  };

  return defaultConfig;
})();
