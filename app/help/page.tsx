import Nav from "@/components/nav"
import Footer from "@/components/footer"
import {
  Search,
  MessageCircle,
  Video,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  HelpCircle,
  Zap,
  Shield,
  CreditCard,
  Users,
  Settings,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Help Center</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, get step-by-step tutorials, and connect with our support team. We're here
              to help you succeed with Listerr.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
              />
            </div>
          </div>

          {/* Quick Help Options */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageCircle className="w-8 h-8 text-green-600" />,
                title: "Live Chat",
                description: "Get instant help from our support team",
                action: "Start Chat",
                available: true,
              },
              {
                icon: <Mail className="w-8 h-8 text-blue-600" />,
                title: "Email Support",
                description: "Send us a detailed message",
                action: "Send Email",
                available: true,
              },
              {
                icon: <Phone className="w-8 h-8 text-purple-600" />,
                title: "Phone Support",
                description: "Talk to our experts directly",
                action: "Call Now",
                available: false,
              },
            ].map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    option.available
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!option.available}
                >
                  {option.action}
                  {!option.available && " (Coming Soon)"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-yellow-600" />,
                title: "Getting Started",
                description: "Learn the basics of using Listerr",
                articles: 12,
                color: "yellow",
              },
              {
                icon: <CreditCard className="w-6 h-6 text-green-600" />,
                title: "Billing & Payments",
                description: "Manage your subscription and payments",
                articles: 8,
                color: "green",
              },
              {
                icon: <Settings className="w-6 h-6 text-blue-600" />,
                title: "Account Settings",
                description: "Configure your account preferences",
                articles: 15,
                color: "blue",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-purple-600" />,
                title: "Mobile App",
                description: "Using Listerr on your mobile device",
                articles: 6,
                color: "purple",
              },
              {
                icon: <Shield className="w-6 h-6 text-red-600" />,
                title: "Security & Privacy",
                description: "Keep your account safe and secure",
                articles: 10,
                color: "red",
              },
              {
                icon: <Users className="w-6 h-6 text-indigo-600" />,
                title: "Team Management",
                description: "Manage team members and permissions",
                articles: 7,
                color: "indigo",
              },
            ].map((topic, index) => (
              <Link key={index} href={`#${topic.title.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg bg-${topic.color}-100 mb-4`}>{topic.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{topic.articles} articles</span>
                    <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "How to Set Up Your First Listerr Store",
                description: "A comprehensive guide to getting your store up and running in under 30 minutes.",
                readTime: "5 min read",
                category: "Getting Started",
                featured: true,
              },
              {
                title: "Integrating with Google My Business",
                description: "Step-by-step instructions for connecting your Google My Business profile.",
                readTime: "8 min read",
                category: "Integrations",
                featured: true,
              },
              {
                title: "Understanding AI Recommendations",
                description: "Learn how our AI system works and how to optimize your product recommendations.",
                readTime: "6 min read",
                category: "AI Features",
                featured: true,
              },
              {
                title: "Managing Your Inventory",
                description: "Best practices for keeping your inventory organized and up-to-date.",
                readTime: "4 min read",
                category: "Inventory",
                featured: true,
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-3">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-green-600 transition-colors">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center text-green-600 hover:text-green-700">
                  <span className="mr-2">Read article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I get started with Listerr?",
                answer:
                  "Getting started is easy! Sign up for early access, verify your email, and follow our onboarding guide. You'll be up and running in minutes.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise accounts.",
              },
              {
                question: "Can I integrate Listerr with my existing e-commerce platform?",
                answer:
                  "Yes! Listerr integrates with popular platforms like Shopify, WooCommerce, Magento, and more. Check our integrations page for the full list.",
              },
              {
                question: "Is there a mobile app available?",
                answer:
                  "Yes, we have mobile apps for both iOS and Android. You can download them from the App Store or Google Play Store.",
              },
              {
                question: "How does the AI recommendation system work?",
                answer:
                  "Our AI analyzes customer behavior, purchase history, inventory data, and market trends to provide personalized product recommendations that increase sales.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We offer 24/7 email support, live chat during business hours, comprehensive documentation, and video tutorials. Enterprise customers get priority support.",
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-green-600 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Video Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Listerr Overview",
                duration: "3:45",
                thumbnail: "/placeholder.svg?height=200&width=300",
                description: "Get a quick overview of Listerr's main features",
              },
              {
                title: "Setting Up Your Store",
                duration: "8:20",
                thumbnail: "/placeholder.svg?height=200&width=300",
                description: "Step-by-step store setup walkthrough",
              },
              {
                title: "Using AI Recommendations",
                duration: "5:15",
                thumbnail: "/placeholder.svg?height=200&width=300",
                description: "Learn how to leverage AI for better sales",
              },
              {
                title: "Mobile App Tutorial",
                duration: "4:30",
                thumbnail: "/placeholder.svg?height=200&width=300",
                description: "Managing your store on the go",
              },
              {
                title: "Analytics Dashboard",
                duration: "6:10",
                thumbnail: "/placeholder.svg?height=200&width=300",
                description: "Understanding your performance metrics",
              },
              {
                title: "Integration Guide",
                duration: "7:25",
                thumbnail: "/placeholder.svg?height=200&width=300",
                description: "Connecting with third-party platforms",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <Link
                href="/access"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Support Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <p className="font-medium">Email Support</p>
                <p>24/7 - We typically respond within 2-4 hours</p>
              </div>
              <div>
                <p className="font-medium">Live Chat</p>
                <p>Monday - Friday, 9 AM - 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
