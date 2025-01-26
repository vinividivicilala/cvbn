import Image from "next/image";

type Props = {
  wrapperStyle: {};
  src: string;
  alt: string;
};

export default function ImageWrapper({
  src,
  alt,
  wrapperStyle = {},
  ...props
}: Props) {
  return (
    <div className="nextjs-image-wrapper" style={wrapperStyle}>
      <Image src={src} alt={alt} {...props} />
    </div>
  );
}
