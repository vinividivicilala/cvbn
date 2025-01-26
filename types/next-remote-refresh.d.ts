declare module "next-remote-refresh" {
  import { NextConfig } from "next/types";

  interface Options {
    paths: string[];
    ignored: string;
  }

  type Config = NextConfig | {};

  type Plugin = (options: Options) => (nextConfig: Config) => Config;

  const plugin: Plugin;

  export default plugin;
}

declare module "next-remote-refresh/hook" {
  export function useRemoteRefresh(options?: {
    shouldRefresh?: (path: string) => boolean;
  }): void;
}
