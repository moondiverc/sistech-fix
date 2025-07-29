import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: "2500px", padding: "0 3%" }}>
      {/* screen 1 */}
      <h1 className="text-4xl font-bold text-center mt-20 text-black">
        Find Your Future. Learn with Purpose. Execute with FIX.
      </h1>
      <p className="text-center mt-4 text-lg text-gray-700">
        Designed for Indonesia’s next-generation workforce, FIX offers smart career planning through customized roadmaps, certified learning paths, and practical tools to help you achieve your goals.
      </p>
      <div className="flex gap-x-4 justify-center">
        <button>
          Get Started
        </button>
        <button>
          Learn More
        </button>
      </div>
      <Image
        src="/landing-page.jpg"
        alt="Logo"
        width={500}
        height={500}
        className="mx-auto mt-10"
      />
      
      {/* screen 2 */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-20 text-black">Preview Your Career Dashboard</h1>
        <p className="text-center mt-4 text-lg text-gray-700">Track your progress, visualize your career path, and get personalized recommendations all in one place.</p>
        <Image
          src="/dashboard1.png"
          alt="Dashboard Preview"
          width={500}
          height={500}
          className="mx-auto mt-10"
        />
        <p className="text-center mt-4 text-lg text-gray-700">Our intelligent dashboard helps you track milestones, measure skill development, and connect with mentors who can guide you to your dream career.</p>
        <button className="mx-auto mt-4 block text-gray-700 py-2 px-4 rounded">See all dashboard features</button>
      </div>

      {/* screen 3 */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-20 text-black">Powerful Features to Accelerate Your Career</h1>
        <p className="text-center mt-4 text-lg text-gray-700">Tools and resources designed to help you plan, execute, and succeed in your career journey.</p>
        <div style={{padding: "0 3%"}}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
            <div className="border bg-white/20 p-4 rounded">
              <h2 className="font-bold text-gray-700">Personalize Career Map</h2>
              <p className="text-gray-700">Our AI-powered career mapping tool analyzes your skills, experience, and goals to create a personalized career roadmap with actionable steps.</p>
            </div>
            <div className="border bg-white/20 p-4 rounded">
              <h2 className="font-bold text-gray-700">CV Analyzer & Feedback</h2>
              <p className="text-gray-700">Upload your resume and get instant feedback with actionable improvement to help you stand out to employers and recruiters.</p>
            </div>
            <div className="border bg-white/20 p-4 rounded">
              <h2 className="font-bold text-gray-700">Training & Certification</h2>
              <p className="text-gray-700">Access personalized learning paths with hand-picked courses, tutorials, and resources tailored to your specific career goals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* screen 4 */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-20 text-black">What Our Users Say</h1>
        <p className="text-center mt-4 text-lg text-gray-700">Join thousands of professionals who have transformed their career with FIX.</p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Image
            src="/testi1.png"
            alt="User Testimonial"
            width={250}
            height={250}
          />
          <Image
            src="/testi2.png"
            alt="User Testimonial"
            width={250}
            height={250}
          />
          <Image
            src="/testi3.png"
            alt="User Testimonial"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* screen 5 */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-20 text-black">Start Your Career Journey with FIX</h1>
        <p className="text-center mt-4 text-lg text-gray-700">Join thousands of professionals who are taking control of their career path with personalized guidance.</p>
        <button className="mx-auto block bg-white/30 py-2 px-4 rounded">Sign Up Free</button>
        <p className="text-center mt-2 text-gray-700">No credit card required. Start your 14-day free trial today.</p>
      </div>
    </div>
  );
}
