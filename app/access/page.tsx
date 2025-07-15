import Nav from "@/components/nav"
import Footer from "@/components/footer"
import AccessForm from "@/components/access-form"
import { CheckCircle } from "lucide-react"

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Nav />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get Exclusive Early Access to Listerr</h1>
            <p className="text-xl text-gray-600 mb-8">
              Be among the first to harness the power of AI-driven commerce—sign up now and start attracting consumers through Generative AI and Google My Business.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Why Join Early?</h2>
              <ul className="space-y-4">
                {[
                  "Priority access to all features",
                  "Exclusive onboarding support",
                  "Shape the future of Listerr with your feedback",
                  "Special early adopter pricing",
                  "Be part of our founding community",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Request Access</h2>
              <AccessForm />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Have questions? Contact us at{" "}
              <a href="mailto:earlyaccess@listerr.com" className="text-blue-600 hover:underline">
                support@listerr.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
