import Link from "next/link"

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Listerr home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-listerr-600 text-base font-extrabold text-white">
        L
      </span>
      <span className="text-xl font-extrabold text-fg">Listerr</span>
    </Link>
  )
}
