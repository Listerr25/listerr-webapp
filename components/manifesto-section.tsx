"use client"

export default function ManifestoSection() {
  return (
    <section className="relative min-h-screen bg-blue-900 overflow-hidden" id="manifesto">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-blue-400/20 blur-[150px]" />
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-blue-200/20 blur-[150px]" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <span className="text-blue-200 tracking-wider mb-8 block">Vision</span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-12">
            The Future of Commerce: AI-Driven, Seamlessly Connected Our Vision At Listerr, we are redefining digital
            commerce by harnessing the power of Deep Tech and Generative AI (GenAI). Our goal is to bridge the gap
            between online sellers, offline MSMEs, and customers, creating a smart, efficient, and scalable commerce
            network that thrives on automation, intelligence, and connectivity.
          </h2>
        </div>
      </div>
    </section>
  )
}
