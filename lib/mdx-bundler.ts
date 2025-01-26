import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import path from "path";
import process from "process";
import rehypeHighlight, { Options as HighlightOptions } from "rehype-highlight";
import remarkGfm from "remark-gfm";
// import remarkGfm, { Options as remarkGfmOptions } from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings, {
  Options as AutolinkOptions,
} from "rehype-autolink-headings";

// ! Can't use named exports from this file. Well, can export, can't import.
// Module not found: Can't resolve 'builtin-modules'
// ESBuild uses node:*, next.js doesn't support node:* prefix yet
// export const BREAKS = {};

// Next.JS esbuild ENOENT https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

const autolinkContent: AutolinkOptions["content"] = {
  type: "element",
  tagName: "svg",
  properties: {
    className: ["jamicon", "jamicon-link"],
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22",
    width: "16",
    height: "16",
  },
  children: [
    {
      type: "element",
      tagName: "path",
      properties: {
        "fill-rule": "evenodd",
        d: "M3.19 9.345a.97.97 0 0 1 1.37 0 .966.966 0 0 1 0 1.367l-2.055 2.052a1.932 1.932 0 0 0 0 2.735 1.94 1.94 0 0 0 2.74 0l4.794-4.787a.966.966 0 0 0 0-1.367.966.966 0 0 1 0-1.368.97.97 0 0 1 1.37 0 2.898 2.898 0 0 1 0 4.103l-4.795 4.787a3.879 3.879 0 0 1-5.48 0 3.864 3.864 0 0 1 0-5.47L3.19 9.344zm11.62-.69a.97.97 0 0 1-1.37 0 .966.966 0 0 1 0-1.367l2.055-2.052a1.932 1.932 0 0 0 0-2.735 1.94 1.94 0 0 0-2.74 0L7.962 7.288a.966.966 0 0 0 0 1.367.966.966 0 0 1 0 1.368.97.97 0 0 1-1.37 0 2.898 2.898 0 0 1 0-4.103l4.795-4.787a3.879 3.879 0 0 1 5.48 0 3.864 3.864 0 0 1 0 5.47L14.81 8.656z",
      },
      children: [],
    },
  ],
};

// const wip: remarkGfmOptions = [];

const bundleMDXFileWithOptions = async (mdxPostDir: string) => {
  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];

    const highlightOptions: HighlightOptions = {
      aliases: { plaintext: "no-highlight" },
    };

    // https://jam-icons.com/ link converted to hast
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"></svg>
    const autolinkOptions: AutolinkOptions = {
      properties: { ariaHidden: true, class: "anchor autolink" },
      content: autolinkContent,
    };

    options.rehypePlugins = [
      ...(options.rehypePlugins ?? []),
      [rehypeHighlight, highlightOptions],
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkOptions],
    ];

    return options;
  };

  const mdxIndex = path.join(mdxPostDir, "index.mdx");

  return await bundleMDXFile(mdxIndex, {
    cwd: mdxPostDir,
    xdmOptions,
  });
};

export default bundleMDXFileWithOptions;
