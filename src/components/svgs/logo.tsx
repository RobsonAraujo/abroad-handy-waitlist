import Image from "next/image";
import type { ComponentProps } from "react";

interface LogoProps extends Omit<ComponentProps<typeof Image>, "src" | "alt"> {}

export default function Logo(props: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Abroad Handy logo"
      width={48}
      height={48}
      {...props}
    />
  );
}
