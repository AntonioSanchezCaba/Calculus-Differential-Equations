/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "source.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;