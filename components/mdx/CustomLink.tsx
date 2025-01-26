import Link from "next/link";

type Props = React.PropsWithChildren<{ href: string }>;

const CustomLink = ({ href, ...props }: Props) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

export default CustomLink;
