module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
