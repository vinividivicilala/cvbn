import CustomLink from "./CustomLink";
import Grid from "./Grid";
import Image from "./Image";

// ComponentMap causes more trouble than it's worth, break out of it
// export type ComponentMap = {
//     [name: string]: string | React.ComponentType<{}> | ComponentMap;
// };
// xdm map is slightly different from @mdx/loader
const mdxComponents: any = {
  /**
   * Any next/components (like next/image), need to be exposed through components.
   * Some of them rely on process.env.and leaks when used through
   */

  /* Custom */
  Grid,
  Image,

  // Default Layout wrapper, can enable as base line and provide a fragment component to opt out, but <NoGrid> component feels weird
  // Which is why default wrapper disabled
  // wrapper: Grid,

  /* Default Markdown */
  a: CustomLink,
  // img: () => null, // Customizing img tag is limits props to src, alt and title. Tried it, not a good idea. Use custom tag instead.
  // pre: () => null,
  // code: () => null,
  // blockquote: () => null,

  // em: () => null,
  // strong: () => null,

  // h1: () => null,
  // h2: () => null,
  // h3: () => null,
  // h4: () => null,
  // h5: () => null,
  // h6: () => null,
  // hr: () => null,

  // ol: () => null,
  // ul: () => null,
  // li: () => null,

  /* GitHub flavored markdown (GFM) */
  // del: () => null,
  // table: () => null,
  // tbody: () => null,
  // td: () => null,
  // th: () => null,
  // thead: () => null,
  // tr: () => null,

  // footnotes are
  // section > hr
};

export default mdxComponents;
