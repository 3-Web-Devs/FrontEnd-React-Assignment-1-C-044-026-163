export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCC7AA] via-[#C2A27A] to-[#8B5E3C] flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-md text-center relative">

        {/* Avatar Circle */}
        <div className="w-20 h-20 bg-[#8B5E3C] rounded-full flex items-center justify-center text-white text-3xl mx-auto -mt-16 border-4 border-white shadow-lg">
          👤
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#4E342E] mt-6 mb-4">
          Login
        </h2>
        <div className="w-16 h-1 bg-[#8B5E3C] mx-auto mb-8 rounded"></div>

        {/* Email Input */}
        <div className="mb-6 text-left">
          <label className="block text-[#4E342E] font-semibold mb-2">
            EMAIL
          </label>
          <div className="flex items-center bg-[#F5EFE6] border border-[#D7CCC8] rounded-lg px-3 py-2">
            <span className="mr-2 text-[#8B5E3C]">📧</span>
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent flex-grow outline-none text-[#4E342E] placeholder-[#8B5E3C]"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6 text-left">
          <label className="block text-[#4E342E] font-semibold mb-2">
            PASSWORD
          </label>
          <div className="flex items-center bg-[#F5EFE6] border border-[#D7CCC8] rounded-lg px-3 py-2">
            <span className="mr-2 text-[#8B5E3C]">🔒</span>
            <input
              type="password"
              placeholder="Enter Password"
              className="bg-transparent flex-grow outline-none text-[#4E342E] placeholder-[#8B5E3C]"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#8B5E3C] hover:bg-[#6F452A] text-white font-semibold py-3 rounded-lg shadow-md transition duration-200">
          LOGIN
        </button>

        {/* Extra Options */}
        <div className="flex justify-between items-center text-sm mt-4 text-[#5D4037]">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="accent-[#8B5E3C]" />
            <span>Remember Me</span>
          </label>
          <a href="#" className="hover:text-[#8B5E3C] transition">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}


