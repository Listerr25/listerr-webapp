import Image from "next/image"

export default function Logo({ className = "" }: { className?: string }) {
  const resolvedClass = className.includes("w-auto")
    ? className.replace("w-auto", "w-8")
    : className.includes("h-8") && !className.includes("w-")
      ? `${className} w-8`
      : className;

  return (
    <Image
      src="/images/listerr-logo.png"
      alt="Listerr Logo"
      width={32}
      height={32}
      className={`${resolvedClass} rounded-md object-contain bg-white p-0.5 border border-border/40`}
    />
  )
}
