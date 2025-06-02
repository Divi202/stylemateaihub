import { Lightbulb, UserPlus, CheckCircle } from "lucide-react"

export default function Steps() {
  const steps = [
    {
      icon: <UserPlus className="w-6 h-6 text-purple-600" />,
      title: "1. Create Your Profile",
      description: "Sign up and set your preferences, measurements, and style goals.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-pink-600" />,
      title: "2. Get Smart Suggestions",
      description: "StyleMate analyzes your inputs and curates perfect looks.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "3. Look Your Best",
      description: "Wear AI-curated outfits that align with your vibe — effortlessly.",
    },
  ]

  return (
    <section id="steps" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get Started in 3 Easy Steps
        </h2>
        <p className="text-gray-600 mb-12">
          From signup to stunning outfits in minutes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// This component outlines the steps for using StyleMateAI, showcasing a simple and engaging process for users to follow.