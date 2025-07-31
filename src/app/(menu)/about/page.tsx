import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            FIX was born from a common problem: many students and fresh
            graduates feel lost when entering the workforce. Between confusing
            job options, outdated resources, and a lack of personalized support,
            career planning often feels overwhelming.
          </p>
          <div className="backdrop-blur-sm rounded-3xl p-6 inline-block">
            <Image
              src="/landing-page.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 text-center hover:bg-white/30 transition duration-200">
              <div className="text-6xl mb-6">🧭</div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700">
                To empower Indonesian students and early job seekers with
                personalized career insights, smart tools, and actionable
                guidance — so they can confidently navigate the future of work.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 text-center hover:bg-white/30 transition duration-200">
              <div className="text-6xl mb-6">🌱</div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700">
                A future where every young person in Indonesia has equal access
                to the knowledge, skills, and support they need to grow,
                compete, and thrive in an ever-evolving job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              <span className="text-6xl">🔍</span> What We Do
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              FIX is a career platform that offers a set of integrated features
              tailored to your goals and background, including:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-3xl text-center hover:bg-white/30 transition duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black text-xl mb-4">
                Personalize Career Map
              </h3>
              <p className="text-gray-700">
                Our AI-powered career mapping tool analyzes your skills,
                experience, and goals to create a personalized career roadmap
                with actionable steps.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-3xl text-center hover:bg-white/30 transition duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black text-xl mb-4">
                CV Analyzer & Feedback
              </h3>
              <p className="text-gray-700">
                Upload your resume and get instant feedback with actionable
                improvement to help you stand out to employers and recruiters.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-3xl text-center hover:bg-white/30 transition duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black text-xl mb-4">
                Training & Certification
              </h3>
              <p className="text-gray-700">
                Access personalized learning paths with hand-picked courses,
                tutorials, and resources tailored to your specific career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-4xl font-bold text-center mt-20 text-black">
          🎯 Why FIX Matters
        </h1>
        <p className="text-center mt-4 text-lg text-gray-700">
          Indonesia’s young talent deserves better career guidance. FIX fills
          this gap by delivering:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-gray-700 text-center">
          <li>Career recommendations based on your actual data and goals</li>
          <li>
            Insights that reflect current industry trends and future skills
          </li>
          <li>
            Practical tools for self-development, job preparation, and
            decision-making
          </li>
          <li>
            No more guesswork. Just a clear, supportive path to your future.
          </li>
        </ul>
      </div>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            <span className="text-6xl">💡</span> Our Core Values
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Join thousands of professionals who are taking control of their
            career path with personalized guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Personalization First
              </h3>
              <p className="text-gray-600">
                Every career journey is unique. We tailor our guidance to your
                specific goals and background.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Actionable Clarity
              </h3>
              <p className="text-gray-600">
                Clear, practical steps that move you forward. No ambiguous
                advice, just results.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Inclusive & Accessible
              </h3>
              <p className="text-gray-600">
                Career guidance for everyone, regardless of background or
                current situation.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Always Evolving
              </h3>
              <p className="text-gray-600">
                Staying ahead of industry trends to provide the most relevant
                career insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-4xl font-bold text-center mt-20 text-black">
          🎯 Why FIX Matters
        </h1>
        <p className="text-center mt-4 text-lg text-gray-700">
          Whether you’re exploring your first job, switching paths, or building
          new skills, FIX is here for you.
        </p>
        <p className="text-center mt-4 text-lg text-gray-700">
          We’re not just a platform — we’re your partner in growth.
        </p>
        <p className="text-center mt-4 text-lg text-gray-700">
          Ready to take the next step?
        </p>
        <button className="bg-white/50 text-black py-2 px-4 rounded mx-auto block">
          Start your journey with FIX.
        </button>
      </div>
    </div>
  );
}
