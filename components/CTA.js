import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to <span className="text-pink-600">Upgrade</span> Your Style?
        </h2>
        <p className="text-gray-700 mb-8">
          StyleMate uses AI to take your fashion to the next level — instantly and effortlessly.
        </p>
        <a href="/sign-up">
          <Button className="text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Get Started with StyleMate
          </Button>
        </a>
      </div>
    </section>
  )
}
