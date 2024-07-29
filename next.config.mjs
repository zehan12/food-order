/** @type {import('next').NextConfig} */
const nextConfig = {
    bundlePagesRouterDependencies: true,
    experimental: {
        reactCompiler: true,
        turbo: {
            loaders: {
                // Add custom loaders here
            },
        },
    },
};

export default nextConfig;
