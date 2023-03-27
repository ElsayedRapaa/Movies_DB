import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return <Image src="/rolling.svg" alt="loading..." width={200} height={200} />;
}
