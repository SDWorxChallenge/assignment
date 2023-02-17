import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode as t his will simulate unmounting and components render twice
  // https://stackoverflow.com/questions/71847778/why-my-nextjs-component-is-rendering-twice
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

export default withContentlayer(nextConfig)
