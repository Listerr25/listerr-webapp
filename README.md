# Listerr

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Listerr** is a Commerce Network Platform that helps offline MSME sellers and online merchants unify their product listings, enrich them with AI, and distribute to Google My Business, ONDC, and other channels from a single dashboard.

---

## 🚀 Key Features

* **Seller Integration**

  * Sync or bulk-upload products via CSV or API
  * Manage inventory and pricing in one place
* **GenAI Enrichment**

  * Automated product description generation
  * Smart categorization and tagging
  * AI-powered promotional copy
* **Multi-Channel Distribution**

  * Push listings to Google My Business (GMB)
  * Publish on ONDC (Open Network for Digital Commerce)
  * Custom channel connectors (e.g., social media)
* **Analytics & Insights**

  * Performance dashboards across all channels
  * Sales, clicks, and engagement metrics
  * AI-driven optimization recommendations

---

## 💻 Tech Stack

* **Frontend**: Next.js, React, Tailwind CSS
* **Backend**: Node.js, Express, PostgreSQL
* **AI Services**: OpenAI GPT-4, Custom ML Models
* **Cloud & Hosting**: Vercel (frontend), AWS (API, storage)
* **Integrations**: Google My Business API, ONDC API

---

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Listerr25/listerr-webapp.git
   cd listerr-webapp
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment Variables**
   Create a `.env.local` file in the project root with:

   ```dotenv
   NEXT_PUBLIC_API_URL=https://api.listerr.in
   OPENAI_API_KEY=your-openai-key
   GMB_CLIENT_ID=your-gmb-client-id
   GMB_CLIENT_SECRET=your-gmb-client-secret
   ONDC_API_KEY=your-ondc-api-key
   DATABASE_URL=your-postgres-connection
   ```

4. **Run in development**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   npm start
   ```

---

## 🔗 Deployment

* **Frontend**: Automatically deployed on Vercel via GitHub integration.
* **Backend**: Hosted on AWS Elastic Beanstalk / EC2 behind API Gateway.
* **Database**: AWS RDS (PostgreSQL).

---

## 📖 Usage

1. Sign in with Google or email/password.
2. Connect your Google My Business account.
3. Upload or sync your product catalog.
4. Configure AI enrichment settings (tags, description tone).
5. Publish to channels and monitor analytics.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> Built with ❤️ by the Listerr Team
