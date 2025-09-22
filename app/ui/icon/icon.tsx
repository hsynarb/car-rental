import Image from "next/image";
import { JSX } from "react";

interface IconProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

/**
 * A simple icon component that renders an image.
 *
 * @param {IconProps} props - The properties for the icon component.
 * @returns {JSX.Element} The rendered icon component.
 */

export default function Icon({
  src,
  width = 24,
  height = 24,
  alt = "icon",
  className = "",
}: IconProps): JSX.Element {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
