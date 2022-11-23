module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};

module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};

module.exports = {
  dependencies: {
    '<dependency>': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink
      },
    },
  },
};
