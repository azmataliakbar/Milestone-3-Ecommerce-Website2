/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        
        pathname: '**',
        
      },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['cdn.sanity.io', 'another-domain.com'], // Add your domains here
//   },
// };

// export default nextConfig;
