import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { Scale, FileText, AlertTriangle, Users, CreditCard, Shield, Globe, Calendar } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <Scale className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Terms of Service</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              These terms govern your use of Listerr's AI-powered commerce network platform and services. Please read
              them carefully.
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
                { title: "Acceptance of Terms", href: "#acceptance" },
                { title: "Description of Service", href: "#service-description" },
                { title: "User Accounts", href: "#user-accounts" },
                { title: "Acceptable Use", href: "#acceptable-use" },
                { title: "Payment Terms", href: "#payment-terms" },
                { title: "Intellectual Property", href: "#intellectual-property" },
                { title: "Privacy & Data", href: "#privacy-data" },
                { title: "Service Availability", href: "#service-availability" },
                { title: "Limitation of Liability", href: "#liability" },
                { title: "Indemnification", href: "#indemnification" },
                { title: "Termination", href: "#termination" },
                { title: "Governing Law", href: "#governing-law" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-amber-600 hover:text-amber-800 hover:underline transition-colors"
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
                Welcome to Listerr! These Terms of Service ("Terms") constitute a legally binding agreement between you
                ("User," "you," or "your") and Listerr ("Company," "we," "us," or "our") regarding your use of our
                AI-powered commerce network platform, website, mobile applications, and related services (collectively,
                the "Services").
              </p>
            </div>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
                <p className="text-gray-700 text-lg">
                  By accessing or using our Services, you acknowledge that you have read, understood, and agree to be
                  bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Age Requirement:</strong> You must be at least 18 years old to use our Services. By using our
                  Services, you represent and warrant that you are at least 18 years old.
                </p>
                <p className="text-gray-700">
                  <strong>Business Use:</strong> If you are using our Services on behalf of a business or organization,
                  you represent that you have the authority to bind that entity to these Terms.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section id="service-description" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Description of Service</h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Listerr provides an AI-powered commerce network platform that enables businesses to:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI-Powered Commerce",
                    items: [
                      "Generate intelligent product recommendations",
                      "Optimize inventory management",
                      "Automate customer engagement",
                      "Analyze market trends and insights",
                    ],
                  },
                  {
                    title: "Platform Integration",
                    items: [
                      "Connect with Google My Business",
                      "Integrate with e-commerce platforms",
                      "Sync with social commerce channels",
                      "Access comprehensive analytics",
                    ],
                  },
                ].map((category, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* User Accounts */}
            <section id="user-accounts" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">User Accounts</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Account Registration</h3>
                  <p className="text-gray-700 mb-3">
                    To access certain features of our Services, you must create an account by providing:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Accurate and complete registration information</li>
                    <li>Valid email address and contact information</li>
                    <li>Business information (if applicable)</li>
                    <li>Payment information for paid services</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Account Security</h3>
                  <p className="text-gray-700 mb-3">You are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Keeping your account information current and accurate</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section id="acceptable-use" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Acceptable Use Policy</h2>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-lg">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree
                  not to use the Services:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Prohibited Activities",
                    items: [
                      "Violate any applicable laws or regulations",
                      "Infringe on intellectual property rights",
                      "Transmit harmful or malicious code",
                      "Engage in fraudulent or deceptive practices",
                      "Harass, abuse, or harm other users",
                      "Attempt to gain unauthorized access",
                    ],
                  },
                  {
                    title: "Content Restrictions",
                    items: [
                      "Upload illegal or harmful content",
                      "Share false or misleading information",
                      "Distribute spam or unsolicited communications",
                      "Post content that violates privacy rights",
                      "Share copyrighted material without permission",
                      "Engage in hate speech or discrimination",
                    ],
                  },
                ].map((category, index) => (
                  <div key={index} className="bg-white border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-red-800">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Payment Terms */}
            <section id="payment-terms" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Subscription Plans</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monthly and annual billing options</li>
                      <li>• Automatic renewal unless cancelled</li>
                      <li>• Pro-rated charges for plan changes</li>
                      <li>• 14-day free trial for new users</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Payment Processing</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Secure payment processing</li>
                      <li>• Major credit cards accepted</li>
                      <li>• PayPal and bank transfers available</li>
                      <li>• All prices in USD unless specified</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Refund Policy</h3>
                  <p className="text-gray-700 mb-3">We offer refunds under the following conditions:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cancellation within 30 days of initial subscription</li>
                    <li>Service unavailability for more than 48 consecutive hours</li>
                    <li>Billing errors or unauthorized charges</li>
                    <li>Refund requests must be submitted within 60 days</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mr-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Intellectual Property Rights</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Rights</h3>
                  <p className="text-gray-700">
                    The Services and all content, features, and functionality are owned by Listerr and are protected by
                    copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or
                    create derivative works without our express written permission.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Your Rights</h3>
                  <p className="text-gray-700">
                    You retain ownership of any content you submit to our Services. By submitting content, you grant us
                    a non-exclusive, worldwide, royalty-free license to use, modify, and display your content solely for
                    the purpose of providing our Services.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Generated Content</h3>
                  <p className="text-gray-700">
                    Content generated by our AI systems is provided "as is" and you are responsible for reviewing and
                    validating all AI-generated recommendations and insights before implementation.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section id="service-availability" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-lg">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access to our
                  Services. We may experience downtime for maintenance, updates, or due to factors beyond our control.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Service Level</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 99.9% uptime target</li>
                    <li>• Scheduled maintenance windows</li>
                    <li>• Status page for service updates</li>
                    <li>• Automatic failover systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Limitations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• No guarantee of continuous availability</li>
                    <li>• Third-party service dependencies</li>
                    <li>• Force majeure events</li>
                    <li>• Network connectivity issues</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700 text-lg mb-4">
                  <strong>IMPORTANT:</strong> To the maximum extent permitted by law, Listerr shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption or downtime</li>
                  <li>Cost of substitute services</li>
                  <li>Damages arising from third-party integrations</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Our total liability for any claims shall not exceed the amount paid by you for the Services in the 12
                  months preceding the claim.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Termination by You</h3>
                  <p className="text-gray-700">
                    You may terminate your account at any time by contacting our support team or through your account
                    settings. Upon termination, your access to paid features will continue until the end of your current
                    billing period.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Termination by Us</h3>
                  <p className="text-gray-700 mb-3">We may terminate or suspend your account immediately if you:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Violate these Terms of Service</li>
                    <li>Engage in fraudulent or illegal activities</li>
                    <li>Fail to pay fees when due</li>
                    <li>Abuse or misuse our Services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-gray-700 text-lg mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                  its conflict of law provisions.
                </p>
                <p className="text-gray-700">
                  Any disputes arising from these Terms or your use of our Services shall be resolved through binding
                  arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 2015.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Legal Inquiries</h3>
                    <p className="text-gray-700">
                      <a href="mailto:legal@listerr.in" className="text-amber-600 hover:underline">
                        legal@listerr.in
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">General Support</h3>
                    <p className="text-gray-700">
                      <a href="mailto:support@listerr.in" className="text-amber-600 hover:underline">
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

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 text-lg">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes via
                  email or through our Services. Your continued use of our Services after such modifications constitutes
                  acceptance of the updated Terms.
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
