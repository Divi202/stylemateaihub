import { ThumbsUp, Sparkle, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyChoose() {
  const reasons = [
    {
      icon: <ThumbsUp className="w-6 h-6 text-purple-600" />,
      title: "Trusted by Style Lovers",
      description: "Our users love how simple and accurate StyleMate’s recommendations are.",
    },
    {
      icon: <Sparkle className="w-6 h-6 text-pink-600" />,
      title: "Real AI. Real Results.",
      description: "We use real machine learning to power real-world fashion advice.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: "Secure by Design",
      description: "We prioritize your privacy and store your data safely with Supabase.",
    },
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why <span className="text-purple-600">StyleMate</span>?
        </h2>
        <p className="text-gray-600 mb-12">
          We’re not just another styling tool. We’re your AI fashion partner.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {reasons.map((item, i) => (
            <Card key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 border-none rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
