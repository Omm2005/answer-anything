/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: 'omm.needs.rest'},
        ]
    }
    
};

export default nextConfig;
