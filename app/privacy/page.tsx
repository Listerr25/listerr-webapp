import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { Shield, Eye, Lock, Users, Database, Globe, Mail, Calendar } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Listerr collects, uses, and protects your
              personal information.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Last updated: January 31, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-gray-900">Quick Navigation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                { title: "Information We Collect", href: "#information-collection" },
                { title: "How We Use Information", href: "#information-use" },
                { title: "Information Sharing", href: "#information-sharing" },
                { title: "Data Security", href: "#data-security" },
                { title: "Your Rights", href: "#your-rights" },
                { title: "Cookies & Tracking", href: "#cookies" },
                { title: "Third-Party Services", href: "#third-party" },
                { title: "Data Retention", href: "#data-retention" },
                { title: "International Transfers", href: "#international-transfers" },
                { title: "Children's Privacy", href: "#childrens-privacy" },
                { title: "Changes to Policy", href: "#policy-changes" },
                { title: "Contact Us", href: "#contact" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-purple-600 hover:text-purple-800 hover:underline transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Listerr ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you use our AI-powered commerce network platform, website, mobile applications,
                and related services (collectively, the "Services").
              </p>
            </div>

            {/* Information We Collect */}
            <section id="information-collection" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Personal Information</h3>
                  <p className="text-gray-700 mb-3">
                    We collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name, email address, and contact information</li>
                    <li>Business information and company details</li>
                    <li>Payment and billing information</li>
                    <li>Profile information and preferences</li>
                    <li>Communications and support interactions</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Usage Information</h3>
                  <p className="text-gray-700 mb-3">
                    We automatically collect information about your use of our Services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and interaction data</li>
                    <li>Log files and analytics data</li>
                    <li>Location information (with your consent)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Data</h3>
                  <p className="text-gray-700 mb-3">For our commerce network services, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Product listings and inventory information</li>
                    <li>Sales and transaction data</li>
                    <li>Customer interaction data</li>
                    <li>Google My Business integration data</li>
                    <li>AI-generated insights and recommendations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="information-use" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Service Provision",
                    items: [
                      "Provide and maintain our Services",
                      "Process transactions and payments",
                      "Generate AI-powered recommendations",
                      "Enable Google My Business integration",
                    ],
                  },
                  {
                    title: "Communication",
                    items: [
                      "Send service-related notifications",
                      "Respond to your inquiries",
                      "Provide customer support",
                      "Send marketing communications (with consent)",
                    ],
                  },
                  {
                    title: "Improvement & Analytics",
                    items: [
                      "Analyze usage patterns and trends",
                      "Improve our Services and features",
                      "Develop new products and services",
                      "Conduct research and analytics",
                    ],
                  },
                  {
                    title: "Legal & Security",
                    items: [
                      "Comply with legal obligations",
                      "Protect against fraud and abuse",
                      "Enforce our terms of service",
                      "Maintain security and integrity",
                    ],
                  },
                ].map((category, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Information Sharing */}
            <section id="information-sharing" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Service Providers",
                      description:
                        "We may share information with trusted third-party service providers who assist us in operating our Services, such as payment processors, cloud hosting providers, and analytics services.",
                      icon: "🔧",
                    },
                    {
                      title: "Business Transfers",
                      description:
                        "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.",
                      icon: "🏢",
                    },
                    {
                      title: "Legal Requirements",
                      description:
                        "We may disclose information when required by law, court order, or to protect our rights, property, or safety, or that of others.",
                      icon: "⚖️",
                    },
                    {
                      title: "Consent",
                      description:
                        "We may share information with your explicit consent or at your direction, such as when you integrate with third-party services.",
                      icon: "✅",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
                      <div className="text-2xl mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mr-4">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-lg mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "SSL/TLS encryption for data transmission",
                  "Regular security audits and assessments",
                  "Access controls and authentication measures",
                  "Data backup and recovery procedures",
                  "Employee training on data protection",
                  "Compliance with industry security standards",
                ].map((measure, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{measure}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mr-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Your Privacy Rights</h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <div className="space-y-4">
                {[
                  {
                    right: "Access",
                    description: "Request access to your personal information we hold",
                  },
                  {
                    right: "Correction",
                    description: "Request correction of inaccurate or incomplete information",
                  },
                  {
                    right: "Deletion",
                    description: "Request deletion of your personal information",
                  },
                  {
                    right: "Portability",
                    description: "Request a copy of your data in a structured format",
                  },
                  {
                    right: "Restriction",
                    description: "Request restriction of processing in certain circumstances",
                  },
                  {
                    right: "Objection",
                    description: "Object to processing based on legitimate interests",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-indigo-50 rounded-lg">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.right}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-gray-700">
                  <strong>To exercise your rights:</strong> Contact us at{" "}
                  <a href="mailto:privacy@listerr.in" className="text-indigo-600 hover:underline">
                    privacy@listerr.in
                  </a>{" "}
                  with your request. We will respond within 30 days.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                We use cookies and similar tracking technologies to enhance your experience and collect usage
                information. You can control cookie settings through your browser preferences.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    type: "Essential Cookies",
                    description: "Required for basic site functionality and security",
                    color: "green",
                  },
                  {
                    type: "Analytics Cookies",
                    description: "Help us understand how you use our Services",
                    color: "blue",
                  },
                  {
                    type: "Marketing Cookies",
                    description: "Used to deliver relevant advertisements",
                    color: "purple",
                  },
                ].map((cookie, index) => (
                  <div key={index} className={`bg-${cookie.color}-50 border border-${cookie.color}-200 rounded-lg p-4`}>
                    <h3 className={`font-semibold text-${cookie.color}-800 mb-2`}>{cookie.type}</h3>
                    <p className={`text-${cookie.color}-700 text-sm`}>{cookie.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:privacy@listerr.in" className="text-purple-600 hover:underline">
                        privacy@listerr.in
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">General Support</h3>
                    <p className="text-gray-700">
                      <a href="mailto:support@listerr.in" className="text-purple-600 hover:underline">
                        support@listerr.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Listerr</strong>
                    <br />
                    AI-Powered Commerce Network
                    <br />
                    India
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Changes */}
            <section id="policy-changes" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 text-lg">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to
                  review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
