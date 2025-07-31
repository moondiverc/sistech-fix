export default function Community() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            COMMUNITY FORUM
          </span>
        </h1>

        <div className="flex gap-8">
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

          <div className="flex-1">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Thread</h2>
                <button className="text-gray-500 hover:text-gray-700">⋯</button>
              </div>

              <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-800">Sari</span>
                      <span className="text-gray-600">| UX designer</span>
                      <span className="text-gray-400 text-sm">16h</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      It took me nearly five months, over 40 job applications,
                      and more than a few breakdowns before I finally landed my
                      first UX job. There were days I doubted if I was cut out
                      for this, especially seeing others get hired faster. But I
                      kept on, kept learning, kept iterating my portfolio.
                      Looking back, every rejection actually led me closer to
                      the right opportunity. So if you&apos;re feeling
                      stuck—keep going. You&apos;re probably just one interview
                      away from a breakthrough.
                    </p>
                    <div className="flex items-center gap-6 text-gray-500">
                      <button className="flex items-center gap-2 hover:text-blue-500">
                        <span>♥</span>
                        <span>120</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-500">
                        <span>💬</span>
                        <span>15</span>
                      </button>
                      <button className="hover:text-blue-500">
                        <span>🔄</span>
                      </button>
                      <button className="hover:text-blue-500">
                        <span>📤</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">replies</span>
                <span className="text-blue-500 text-sm">
                  View activity &gt;
                </span>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white text-sm font-semibold">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-800">
                        MentoringAppUser
                      </span>
                      <span className="text-gray-400 text-sm">16h</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      This is the kind of reminder I needed before selecting my
                      mentor. Thank you, Sari! 🙏
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <button className="hover:text-blue-500">♥ 0</button>
                      <button className="hover:text-blue-500">💬 120</button>
                      <button className="hover:text-blue-500">🔄</button>
                      <button className="hover:text-blue-500">📤</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-sm font-semibold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-800">Sari</span>
                      <span className="text-gray-600">| UX Designer</span>
                      <span className="text-gray-400 text-sm">16h</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      You&apos;re welcome! Wishing you a mentoring journey that
                      helps you thrive ✨
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <button className="hover:text-blue-500">♥ 0</button>
                      <button className="hover:text-blue-500">💬 120</button>
                      <button className="hover:text-blue-500">🔄</button>
                      <button className="hover:text-blue-500">📤</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white text-sm font-semibold">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-800">
                        ProductBuddy
                      </span>
                      <span className="text-gray-400 text-sm">15h</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      &quot;Seen, not small&quot; — wow. That hits. Bookmarking
                      this.
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <button className="hover:text-blue-500">♥ 0</button>
                      <button className="hover:text-blue-500">💬 120</button>
                      <button className="hover:text-blue-500">🔄</button>
                      <button className="hover:text-blue-500">📤</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center text-white text-sm font-semibold">
                    F
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-800">
                        FreshGradDev
                      </span>
                      <span className="text-gray-400 text-sm">14h</span>
                    </div>
                    <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-3">
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <span>↩</span>
                        <span>Reply to Sari | UX designer</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type your reply..."
                        className="w-full bg-transparent text-gray-700 placeholder-gray-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
