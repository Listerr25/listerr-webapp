"use client"

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"

export default function SellerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Nav />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Seller Dashboard
              <br />
              <span className="text-primary-600">Coming Soon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your business with our AI-powered commerce network. Get early access to our seller dashboard and
              be among the first to experience the future of retail.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent rounded-2xl" />
            <Image
              src="https://stories.suvichaar.org/Screenshot%202025-07-14%20222511.png"
              alt="Listerr Seller Dashboard Preview"
              width={1920}
              height={1080}
              className="rounded-2xl shadow-2xl border border-blue-100"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScY4HCm8fY3zJjjh0119wuQ6oszK46nMy1sR69mtR0N8ZISDA/viewform",
                    "_blank",
                  )
                }
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Early Access
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Insights",
                description:
                  "Get smart recommendations and insights to grow your business using our advanced AI algorithms.",
              },
              {
                title: "Seamless Integration",
                description: "Connect with Google My Business and other platforms to reach more customers effectively.",
              },
              {
                title: "Smart Analytics",
                description: "Track your performance with detailed analytics and real-time reporting dashboards.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
