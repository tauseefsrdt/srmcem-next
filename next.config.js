/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adminpre.srmcem.ac.in",
      },
      {
        protocol: "https",
        hostname: "crmservices.srmu.ac.in",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api-proxy/9031/:path*",
        destination: "https://adminpre.srmcem.ac.in:9031/:path*",
      },
    ];
  },
};

export default nextConfig;
