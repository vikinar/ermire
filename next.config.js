const withPWA = require('next-pwa');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
    poweredByHeader: false,
    generateEtags: false,
    distDir: '_next',
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
}));

// module.exports = withPWA({
//     poweredByHeader: false,
//     generateEtags: false,
//     distDir: '_next',
//     pwa: {
//         dest: 'public'
//     }
// })
