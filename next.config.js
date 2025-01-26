// @ts-check
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withNextPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const remoteRefresh = require("next-remote-refresh");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
};

// ! This uses undocumented Next API and may break at any time
const remoteRefreshWithServerOptions = remoteRefresh({
  paths: [path.resolve("./blog/**/*.mdx")],
  ignored: "**/*.json",
});

module.exports = withPlugins(
  [
    [
      withNextPWA,
      {
        pwa: {
          dest: "public",
          disable: process.env.NODE_ENV !== "production",
          runtimeCaching,
        },
      },
    ],
    remoteRefreshWithServerOptions,
  ],
  nextConfig
);
