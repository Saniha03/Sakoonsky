# Sakoonsky – سكون سكاي  
🌙 Quranic Guidance for Life's Struggles & Mental Well-being

[<image-card alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" ></image-card>](https://nextjs.org/)
[<image-card alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white" ></image-card>](https://www.typescriptlang.org/)
[<image-card alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" ></image-card>](https://tailwindcss.com/)
[<image-card alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" ></image-card>](https://opensource.org/licenses/MIT)

**Sakoonsky** (meaning "peace in the sky" in a blend of Arabic & modern feel) is a compassionate web application that offers Islamic spiritual guidance drawn directly from the **Quran**, authentic **Hadith** (Sahih Bukhari, Muslim, etc.), and classical Fiqh sources — combined with thoughtful AI-assisted insights — to help Muslims navigate anxiety, grief, relationships, motivation, and other life challenges.

> ⚠️ **Important Disclaimer**  
> This app provides spiritual inspiration and reminders from Islamic sources. It is **not** a substitute for professional mental health care, therapy, or medical advice. For serious concerns, please consult qualified professionals or trusted scholars.

## ✨ Features (Current & Planned)

- 🔍 Intelligent search for life problems → relevant Quranic verses, Tafsir, Hadith
- 🤖 AI-powered personalized guidance (using Google Gemini API) grounded in Islamic texts
- 📖 Display of verses in Arabic + English translation (with Tafsir options like Asad, Maarif-ul-Quran, etc.)
- ❤️ Save favorite verses/guidance for daily reflection
- 🌙 Serene, mobile-friendly UI designed for calm and focus
- 🕌 Planned: Daily reminders, prayer time integration, multilingual support (Arabic/English/Bengali/Urdu), community contributions of reflections

## 🖼️ Screenshots / Demo

(Add screenshots here later – drag images into GitHub or use links)

<!-- Example placeholder -->
<!-- <image-card alt="Home Page" src="screenshots/home.png" ></image-card> -->
<!-- <image-card alt="Guidance Example" src="screenshots/guidance.png" ></image-card> -->

[Live Demo → https://sakoonsky.vercel.app](https://sakoonsky.vercel.app) (update when deployed)

## 🚀 Tech Stack

- **Frontend**: Next.js 14/15 (App Router), TypeScript, Tailwind CSS
- **Data Sources**:
  - Quran: AlQuran.cloud API
  - Hadith: Sunnah.com API (or Hadith API)
  - AI Guidance: Google Gemini API
- **Deployment**: Vercel (recommended)
- **Future**: Supabase/PostgreSQL for user data, vector DB (Pinecone) for semantic search

## 📋 Prerequisites

- Node.js ≥ 18
- npm / pnpm / yarn
- Google Gemini API key (get from https://ai.google.dev)
- (Optional) Accounts for Quran/Hadith APIs if rate limits become an issue

## 🛠️ Quick Start (Local Development)

1. Clone the repo
   ```bash
   git clone https://github.com/<your-username>/Sakoonsky.git
   cd Sakoonsky
