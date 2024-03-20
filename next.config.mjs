/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        images: {
            // Configuration for proxying images from image.tmdb.org
            domains: ['image.tmdb.org']
        }
    }
};

module.exports = nextConfig;
