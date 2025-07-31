import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
              Find Your Future. Learn with Purpose. Execute with FIX.
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Designed for Indonesia&apos;s next-generation workforce, FIX offers
            smart career planning through customized roadmaps, certified
            learning paths, and practical tools to help you achieve your goals.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-200">
              Get Started
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-black font-semibold py-3 px-8 rounded-xl hover:bg-white/30 transition duration-200">
              Learn More
            </button>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 inline-block">
            <Image
              src="/landing-page.jpg"
              alt="Landing Page Preview"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Preview Your Career Dashboard
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Track your progress, visualize your career path, and get
            personalized recommendations all in one place.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <Image
              src="/dashboard1.png"
              alt="Dashboard Preview"
              width={800}
              height={500}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Our intelligent dashboard helps you track milestones, measure skill
            development, and connect with mentors who can guide you to your
            dream career.
          </p>
          <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-black font-semibold py-3 px-6 rounded-xl hover:bg-white/30 transition duration-200">
            See all dashboard features
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-6">
            Powerful Features to Accelerate Your Career
          </h2>
          <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Tools and resources designed to help you plan, execute, and succeed
            in your career journey.
          </p>
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50/30 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-6">
            What Our Users Say
          </h2>
          <p className="text-center text-xl text-gray-700 mb-16">
            Join thousands of professionals who have transformed their career
            with FIX.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition duration-200">
              <Image
                src="/testi1.png"
                alt="User Testimonial"
                width={300}
                height={200}
                className="rounded-2xl w-full"
              />
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition duration-200">
              <Image
                src="/testi2.png"
                alt="User Testimonial"
                width={300}
                height={200}
                className="rounded-2xl w-full"
              />
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition duration-200">
              <Image
                src="/testi3.png"
                alt="User Testimonial"
                width={300}
                height={200}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Start Your Career Journey with FIX
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who are taking control of their
            career path with personalized guidance.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl transition duration-200 text-lg mb-4">
              Sign Up Free
            </button>
            <p className="text-gray-700">
              No credit card required. Start your 14-day free trial today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
