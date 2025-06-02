import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
export default function HeroSection() {
    return (
        <section id="hero" className="w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">

                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your <span className="text-purple-600">AI Stylist</span> is Here
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        StyleMate helps you discover, match, and refine your personal fashion — powered by AI.
                    </p>
                    <a href="#features">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition">
                            Start Exploring
                        </Button>
                    </a>
                </div>

                {/* Placeholder Card Section */}
                <Card className="bg-white border shadow-xl rounded-2xl">
                    <CardContent className="p-6">
                        <p className="text-sm text-gray-500 mb-2">Preview</p>
                        <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-gray-400">
                            Styling Preview
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
