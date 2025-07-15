import Nav from "@/components/nav"
import VideoSection from "@/components/video-section"
import ManifestoSection from "@/components/manifesto-section"
import SignatureSection from "@/components/signature-section"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      <section className="relative pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile layout (stacked) */}
          <div className="block md:hidden mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-6">
                <span className="text-gray-900">Smarter Commerce, Stronger Connections</span>
                <br />
                <span className="text-primary-600">Powered by AI</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                An AI-powered commerce network using Generative AI and social commerce to attract consumers via Google
                My Business.
              </p>
            </div>

            {/* Mobile devices showcase (centered) */}
            <div className="relative mx-auto max-w-sm h-[500px] mb-8">
              {/* Desktop preview (smaller on mobile) */}
              <div className="relative w-full h-[250px] mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%2011%20(1)-FGIEN8Ya9OKWw3D1OmYZukawlQnVof.png"
                  alt="Listerr Marketplace Interface"
                  fill
                  className="object-cover rounded-xl shadow-lg border border-gray-200"
                  priority
                />
              </div>

              {/* Mobile preview (centered on mobile) */}
              <div className="relative mx-auto w-[220px] h-[440px]">
                <div className="absolute inset-0 bg-gray-900 rounded-[32px] z-10"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Android%20-%20174-fF6xuqHVpXq2gUqCVFu74EdTVHZfh6.png"
                  alt="Listerr Mobile App"
                  fill
                  className="object-cover relative z-20 rounded-[28px] border-[6px] border-gray-900"
                  priority
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-30"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seller"
                className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-center"
              >
                See Seller Dashboard
              </Link>
              <Link
                href="/access"
                className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors text-center"
              >
                GET EARLY ACCESS
              </Link>
            </div>
          </div>

          {/* Tablet and Desktop layout (side by side) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-gray-900">Smarter Commerce, Stronger Connections</span>
                <br />
                <span className="text-primary-600">Powered by AI</span>
              </h1>

              <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mb-8 lg:mb-12">
                An AI-powered commerce network using Generative AI and social commerce to attract consumers via Google
                My Business.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/seller"
                  className="bg-white border-2 border-gray-900 text-gray-900 px-6 lg:px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors inline-block"
                >
                  See Seller Dashboard
                </Link>
                <Link
                  href="/access"
                  className="bg-primary-600 text-white px-6 lg:px-8 py-3 rounded-full hover:bg-primary-700 transition-colors inline-block"
                >
                  GET EARLY ACCESS
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Desktop View */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%2011%20(1)-FGIEN8Ya9OKWw3D1OmYZukawlQnVof.png"
                  alt="Listerr Marketplace Interface"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-2xl border border-gray-200"
                  priority
                />
              </div>

              {/* Mobile View - Adjust position based on screen size */}
              <div className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-[200px] md:w-[220px] lg:w-[280px] h-[400px] md:h-[440px] lg:h-[560px] z-20">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gray-900 rounded-[32px] md:rounded-[36px] lg:rounded-[40px] z-10"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Android%20-%20174-fF6xuqHVpXq2gUqCVFu74EdTVHZfh6.png"
                    alt="Listerr Mobile App"
                    fill
                    className="object-cover relative z-20 rounded-[28px] md:rounded-[30px] lg:rounded-[32px] border-[6px] md:border-[7px] lg:border-[8px] border-gray-900"
                    priority
                  />
                  {/* Phone Frame Details */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 lg:w-32 h-4 md:h-5 lg:h-6 bg-gray-900 rounded-b-xl lg:rounded-b-2xl z-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-primary-500 to-blue-600" />
      </section>

      <VideoSection />
      <ManifestoSection />
      <SignatureSection />
      <Footer />
    </main>
  )
}
