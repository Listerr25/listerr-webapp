import Image from "next/image"
import Link from "next/link"

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Listerr home">
      <Image
        src="/images/listerr-logo-horizontal.svg"
        alt="Listerr Logo"
        width={140}
        height={32}
        priority
        className="h-7 md:h-8 w-auto object-contain"
      />
    </Link>
  )
}
