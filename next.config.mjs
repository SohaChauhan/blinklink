/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "blinklink-project.s3.amazonaws.com",
      },
    ],
  },
};
export default nextConfig;
