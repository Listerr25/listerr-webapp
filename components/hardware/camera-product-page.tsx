import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Shield,
  Zap,
  PhoneCall,
  Mail,
  Camera,
  Layers,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CAMERAS_DATA, type CameraProduct } from "@/lib/camera-data"

export function CameraProductDetail({ product }: { product: CameraProduct }) {
  const otherProducts = CAMERAS_DATA.filter((c) => c.id !== product.id)

  return (
    <div className="bg-bg">
      {/* Top Breadcrumb & Hero */}
      <section className="border-b border-border bg-gradient-to-b from-brand-listerr-50/70 via-white to-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/hardware/ai-cameras"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-listerr-700 hover:text-brand-listerr-800"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to AI Camera Range
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-listerr-200 bg-white px-3.5 py-1 text-xs font-semibold text-brand-listerr-700 shadow-sm">
                <Camera className="h-3.5 w-3.5" />
                Listerr One AI Camera Series · {product.formFactor}
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-brand-listerr-700">
                {product.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-fg-subtle">Engineered For:</span>
                {product.bestFor.map((bf) => (
                  <span
                    key={bf}
                    className="rounded-lg border border-border bg-white px-3 py-1 text-xs font-semibold text-fg shadow-xs"
                  >
                    {bf}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button asChild size="lg" variant="listerr" className="w-full sm:w-auto rounded-xl font-bold shadow-md">
                  <a href="#book-survey">Book Site Survey</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-xl border-blue-200 bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                  <Link href="/integrations">Explore POS & Screen Integrations</Link>
                </Button>
              </div>
            </div>

            {/* Right Card: Technical Profile & Real Hardware Photo (Blue & White Theme) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 text-blue-950 shadow-xl shadow-blue-500/5 sm:p-8">
                {/* Real Scraped Hardware Photo */}
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 mb-6 overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                  <div className="absolute top-2 left-2 z-10 flex gap-2">
                    <span className="rounded bg-black/75 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                      ON-DEVICE AI
                    </span>
                    <span className="rounded bg-black/75 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-blue-300">
                      PoE GIGABIT
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-blue-100 pb-4">
                  <span className="text-xs font-mono uppercase text-blue-600 font-bold">
                    HARDWARE SPECIFICATION
                  </span>
                  <span className="rounded bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-700">
                    {product.formFactor}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-[11px] font-mono text-blue-600 uppercase font-bold">RESOLUTION & OPTICS</p>
                    <p className="mt-0.5 text-sm font-bold text-blue-950">
                      {product.coreSpecs.resolution}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-blue-600 uppercase font-bold">NETWORK & POWER</p>
                    <p className="mt-0.5 text-sm font-bold text-blue-950">
                      {product.coreSpecs.connectivity}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-blue-600 uppercase font-bold">STORAGE & RESILIENCE</p>
                    <p className="mt-0.5 text-sm font-bold text-blue-950">
                      {product.coreSpecs.storage}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-blue-600 uppercase font-bold">HOUSING & RATING</p>
                    <p className="mt-0.5 text-sm font-bold text-blue-950">
                      {product.coreSpecs.weatherOrRating}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-blue-600 uppercase font-bold">EDGE INFERENCE ENGINE</p>
                    <p className="mt-0.5 text-sm font-bold text-blue-700">
                      {product.coreSpecs.aiCapability}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-xs text-blue-950">
                  <p className="font-bold text-blue-900">DPDP 2023 Compliant</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    Continuous video stays on the device; facial blurring is applied on-edge
                    before data leaves your outlet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Sees Live View Section (Blue & White) */}
      <section className="py-16 border-b border-blue-100 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 text-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Computer Vision Demonstration
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950">
              What The {product.formFactor} Camera Sees
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {product.liveViewDescription}
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 p-4 sm:p-6 overflow-hidden">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-blue-100 bg-slate-100">
              <Image
                src={product.liveViewImage}
                alt={`${product.name} Live View`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="rounded bg-black/80 backdrop-blur px-3 py-1 text-xs font-mono text-emerald-400">
                  LIVE STREAM · 25 FPS
                </span>
                <span className="rounded bg-black/80 backdrop-blur px-3 py-1 text-xs font-mono text-white">
                  ZONE: ACTIVE
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-4 sm:p-6">
                <p className="text-sm sm:text-base font-semibold text-white max-w-3xl">
                  {product.liveViewDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Vision AI Solutions */}
      <section className="py-16 border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              Operational Solutions
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg">
              Recommended Vision AI for {product.formFactor}
            </h2>
            <p className="mt-2 text-sm text-fg-muted">
              Pre-trained neural models switched on per camera from the Listerr operations
              dashboard.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.visionAiCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-brand-listerr-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-listerr-50 text-brand-listerr-600">
                  <Zap className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-bold text-fg">{cap.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Installation & Placement Guidance */}
          <div className="mt-12 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-fg-muted">
              Professional Placement & Mounting Guidance
            </h3>
            <p className="mt-2 text-base font-medium text-fg">
              {product.recommendedPlacement}
            </p>
            <p className="mt-2 text-xs text-fg-muted">
              Note: Every Listerr installation includes a complimentary site survey, Cat6 PoE
              cable pull, and camera angle calibration by our field team.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">
            Key Hardware & System Capabilities
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.keyFeatures.map((feat, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-surface-sunken p-5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <h3 className="mt-3 text-sm font-bold text-fg">{feat.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Other Models */}
      <section className="py-16 border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">
            Explore Other Cameras in the Listerr One Series
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                href={`/hardware/ai-cameras/${p.id}`}
                className="group rounded-xl border border-border bg-white p-4 shadow-xs transition hover:-translate-y-1 hover:border-brand-listerr-400 hover:shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full rounded-lg bg-black/90 mb-3 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform"
                    sizes="200px"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase text-brand-listerr-600">
                  {p.formFactor}
                </span>
                <h3 className="mt-1 text-sm font-bold text-fg group-hover:text-brand-listerr-700">
                  {p.name.replace("Listerr One ", "")}
                </h3>
                <p className="mt-1 text-xs text-fg-muted line-clamp-2">{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book Survey Contact Section (Blue & White) */}
      <section id="book-survey" className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white shadow-xl shadow-blue-600/15">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white">
            Complimentary Site Survey
          </span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Deploy {product.name} in Your Outlet
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-blue-100">
            Our installation engineering team handles site audits, virtual zone calibration,
            PoE network drops, and POS pairing across India.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold shadow-lg"
            >
              <a href="tel:9145989198" className="flex items-center justify-center gap-2">
                <PhoneCall className="h-4 w-4" /> Call: 9145989198
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10 font-bold"
            >
              <a href="mailto:support@listerr.in" className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" /> Email: support@listerr.in
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
