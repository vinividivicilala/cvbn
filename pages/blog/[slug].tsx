import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRemoteRefresh } from "next-remote-refresh/hook";
import React from "react";
import Layout from "../../components/Layout";
import mdxComponents from "../../components/mdx";
import { getAllBlogPostSlugs, getPost, MDXPost } from "../../lib/blog";

type Props = { post: MDXPost };

export default function PostPage({ post }: Props): JSX.Element {
  // ! This uses undocumented Next API and may break at any time
  useRemoteRefresh({
    shouldRefresh: (path) => path.includes(post.slug),
  });

  const MDXComponent = React.useMemo(
    () => getMDXComponent(post.mdxCode),
    [post.mdxCode]
  );

  return (
    <Layout
      title={post.frontmatter.title}
      created={post.frontmatter.date}
      className="prose v-layout v-underline-links auto-cols-fr"
    >
      <MDXComponent components={mdxComponents} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { post: await getPost(params?.slug) },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllBlogPostSlugs(),
  fallback: false,
});
