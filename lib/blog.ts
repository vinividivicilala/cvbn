import fs from "fs";
import path from "path";
import matter from "gray-matter"; // Included in mdx-bundler but not re-exported, needed to parse all MDX files frontmatter
import bundleMDXFileWithOptions from "./mdx-bundler";
import { cwd } from "process";

type Frontmatter = {
  title: string;
  date: string;
  spoiler?: string;
  slug?: string;
};

type Slug = { slug: string };
type FrontmatterProperty = { frontmatter: Frontmatter };
type MDXCode = { mdxCode: string };

export type MDXPost = Slug & FrontmatterProperty & MDXCode;
export type AllBlogPosts = Array<Slug & FrontmatterProperty>;

const BLOG_PATH = path.join(cwd(), "blog");

// Filter out dirs like: .DS_Store and .templates
const getBlogDirs = () =>
  fs.readdirSync(BLOG_PATH).filter((dir) => !dir.startsWith("."));

export function getAllBlogPosts(): AllBlogPosts {
  const allPostsInfo = getBlogDirs().map((dir) => {
    const fileContents = fs.readFileSync(
      path.join(BLOG_PATH, dir, "index.mdx")
    );
    const matterFile = matter(fileContents);

    return {
      slug: dir,
      frontmatter: matterFile.data as Frontmatter,
    };
  });

  // Descending order
  return allPostsInfo.sort((post1, post2) =>
    post1.frontmatter.date > post2.frontmatter.date ? -1 : 1
  );
}

export const getAllBlogPostSlugs = () =>
  getBlogDirs().map((dirName) => ({
    params: {
      slug: dirName,
    } as Slug,
  }));

export async function getPost(
  slug: string | string[] | undefined
): Promise<MDXPost> {
  if (!slug) throw Error("Can't get post without a slug.");
  if (Array.isArray(slug))
    throw Error("Function needs an update to support array");

  const mdxPostDir = path.join(BLOG_PATH, slug);

  let code: string;
  let frontmatter: Frontmatter;

  try {
    const mdx = await bundleMDXFileWithOptions(mdxPostDir);
    code = mdx.code;
    frontmatter = mdx.frontmatter as Frontmatter;
  } catch (error) {
    console.error("! MDX Bundler failed " + mdxPostDir);
    throw error;
  }

  return {
    slug,
    frontmatter,
    mdxCode: code,
  };
}
