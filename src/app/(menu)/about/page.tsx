import Image from "next/image";

export default function About() {
    return (
        <div style={{ height: "3000px", padding: "0 3%" }}>
            {/* screen 1 */}
            <h1 className="text-4xl font-bold text-center mt-20 text-black">About Us</h1>
            <p className="text-center mt-4 text-lg text-gray-700">FIX was born from a common problem: many students and fresh graduates feel lost when entering the workforce. Between confusing job options, outdated resources, and a lack of personalized support, career planning often feels overwhelming.</p>
            <Image src="/landing-page.jpg" alt="About Us" width={500} height={500} className="mx-auto mt-10"/>

            {/* screen 2 */}
            <div>
                <div>
                    <h2 className="text-xl font-bold text-center mt-20 text-black">🧭 Our Mission</h2>
                    <p className="text-center mt-4 text-lg text-gray-700">To empower Indonesian students and early job seekers with personalized career insights, smart tools, and actionable guidance — so they can confidently navigate the future of work.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-center mt-20 text-black">🌱 Our Vision</h2>
                    <p className="text-center mt-4 text-lg text-gray-700">A future where every young person in Indonesia has equal access to the knowledge, skills, and support they need to grow, compete, and thrive in an ever-evolving job market.</p>
                </div>
            </div>

            {/* screen 3 */}
            <div>
                <h1 className="text-4xl font-bold text-center mt-20 text-black">🔍 What We Do</h1>
                <p className="text-center mt-4 text-lg text-gray-700">FIX is a career platform that offers a set of integrated features tailored to your goals and background, including:</p>
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
                <h1 className="text-4xl font-bold text-center mt-20 text-black">🎯 Why FIX Matters</h1>
                <p className="text-center mt-4 text-lg text-gray-700">Indonesia’s young talent deserves better career guidance. FIX fills this gap by delivering:</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 text-center">
                    <li>Career recommendations based on your actual data and goals</li>
                    <li>Insights that reflect current industry trends and future skills</li>
                    <li>Practical tools for self-development, job preparation, and decision-making</li>
                    <li>No more guesswork. Just a clear, supportive path to your future.</li>
                </ul>
            </div>

            {/* screen 5 */}
            <div>
                <h1 className="text-4xl font-bold text-center mt-20 text-black">💡 Our Core Values</h1>
                <p className="text-center mt-4 text-lg text-gray-700">Join thousands of professionals who are taking control of their career path with personalized guidance.</p>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 text-center">
                        <div className="border bg-white/20 p-4 rounded">
                            <p className="text-gray-700">Personalization First</p>
                        </div>
                        <div className="border bg-white/20 p-4 rounded">
                            <p className="text-gray-700">Actionable Clarity</p>
                        </div>
                        <div className="border bg-white/20 p-4 rounded">
                            <p className="text-gray-700">Inclusive & Accessible</p>
                        </div>
                        <div className="border bg-white/20 p-4 rounded">
                            <p className="text-gray-700">Always Evolving</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* screen 6 */}
            <div>
                <h1 className="text-4xl font-bold text-center mt-20 text-black">🎯 Why FIX Matters</h1>
                <p className="text-center mt-4 text-lg text-gray-700">Whether you’re exploring your first job, switching paths, or building new skills, FIX is here for you.</p>
                <p className="text-center mt-4 text-lg text-gray-700">We’re not just a platform — we’re your partner in growth.</p>
                <p className="text-center mt-4 text-lg text-gray-700">Ready to take the next step?</p>
                <button className="bg-white/50 text-black py-2 px-4 rounded mx-auto block">Start your journey with FIX.</button>
            </div>
        </div>
    );
}