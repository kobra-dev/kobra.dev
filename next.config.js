const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    async redirects() {
        return [
            {
                source: '/replit',
                destination: '/demo',
                permanet: true
            }
        ];
    }
});
