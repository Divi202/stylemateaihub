import { Sparkles, ShieldCheck, SlidersHorizontal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "AI-Powered Styling",
      description: "Get intelligent outfit recommendations tailored to your personal taste.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
      title: "Privacy First",
      description: "Your data stays yours. No sharing. No selling. 100% secure.",
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-purple-600" />,
      title: "Personalized Fit",
      description: "Input preferences and measurements to get styling that truly fits you.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-pink-600">StyleMate</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Designed for modern fashion lovers who want smarter, faster, more personal style.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feat, index) => (
            <Card key={index} className="rounded-2xl border bg-gradient-to-br from-purple-50 to-pink-50 shadow-md">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-4">
                  {feat.icon}
                  <h3 className="text-lg font-semibold ml-3 text-gray-800">{feat.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{feat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
