const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['sommelier/App']
        }
    }, argv);
    return config;
};

// https://github.com/akveo/react-native-ui-kitten/issues/996