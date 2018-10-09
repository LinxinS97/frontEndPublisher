const { injectbabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectbabelPlugin(
        // 按需加载
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    )
    return config;
}