import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Image
      src="/rolling.svg"
      alt="loading..."
      width={50}
      height={50}
      className="flex justify-center w-screen"
    />
  );
}
