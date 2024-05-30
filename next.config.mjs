/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "pub-a3eb6ecc47d545adb4242f0c2269de37.r2.dev",
            port: "",
            pathname: "**/**",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
