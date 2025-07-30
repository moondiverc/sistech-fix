export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md">
        {/* Welcome Header */}
        <h1 className="text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
            Welcome!
          </span>
        </h1>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-black font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-black font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-black hover:text-gray-700 text-sm"
            >
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Log In with Email
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-400" />
            <span className="px-4 text-gray-600">Or</span>
            <hr className="flex-1 border-gray-400" />
          </div>

          {/* Continue with Google */}
          <button
            type="button"
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border border-gray-300 transition duration-200 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <span className="text-black">Not Have Account? </span>
            <a
              href="/sign-up"
              className="text-black hover:text-gray-700 font-semibold"
            >
              Sign Up Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
