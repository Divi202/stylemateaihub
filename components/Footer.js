export default function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        
        {/* Left side: logo or brand */}
        <div className="font-semibold text-gray-800">
          StyleMate<span className="text-pink-600">AI</span>
        </div>

        {/* Center: Links */}
        <div className="flex gap-4">
          <a href="#features" className="hover:text-purple-600 transition">Features</a>
          <a href="#steps" className="hover:text-purple-600 transition">How it Works</a>
          <a href="#why" className="hover:text-purple-600 transition">Why Us</a>
          <a href="/sign-in" className="hover:text-purple-600 transition">Login</a>
        </div>

        {/* Right side: copyright */}
        <div>
          © {new Date().getFullYear()} StyleMateAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
