import Image from "next/image";

export default function Community() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            COMMUNITY FORUM
          </span>
        </h1>

        <div className="flex gap-8 justify-center items-start">
          <div className="w-64 flex-shrink-0">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6">
              <div className="flex flex-col gap-3">
                <button className="bg-blue-500 text-white py-3 px-6 rounded-2xl text-left font-medium hover:bg-blue-600 transition-colors">
                  📍 Popular
                </button>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 py-3 px-6 rounded-2xl text-left hover:bg-white/30 transition-colors">
                  👥 Explore All Groups
                </button>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 py-3 px-6 rounded-2xl text-left hover:bg-white/30 transition-colors">
                  🏠 My Group
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/community.png"
              alt="Community Illustration"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
