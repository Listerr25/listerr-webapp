"use client"

export default function SignatureSection() {
  return (
    <section className="relative min-h-screen bg-blue-50 overflow-hidden">
      {/* Gradient Wave Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-blue-400/30 to-blue-600/30"
          style={{
            maskImage: "radial-gradient(circle at 50% 70%, black, transparent)",
            WebkitMaskImage: "radial-gradient(circle at 50% 70%, black, transparent)",
          }}
        />

        {/* Blue overlay wave */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40vh]"
          style={{
            background: "linear-gradient(to bottom, transparent, #1e40af)",
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 20 0, 80 0, 100 100 Z' fill='%231e40af'/%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 20 0, 80 0, 100 100 Z' fill='%231e40af'/%3E%3C/svg%3E\")",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        {/* Get Early Access Button */}
        <p className="text-blue-900 text-2xl md:text-3xl font-bold mb-6 text-center">Turn your listing into insight</p>
        <button
          onClick={() => window.open("https://forms.gle/jhekaVpWQy2PctkM7", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Early Access
        </button>
      </div>
    </section>
  )
}
