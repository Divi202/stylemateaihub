'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AIStylistPage() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [outfits, setOutfits] = useState([])

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = { role: 'user', text: input }
    setMessages([...messages, newMessage])
    setInput('')

    setTimeout(() => {
      const aiResponse = {
        role: 'ai',
        text: 'Here are 3 outfits I styled for you based on your request.',
        outfits: [
          { id: 1, title: 'Casual Streetwear', desc: 'White tee, black jeans, denim jacket' },
          { id: 2, title: 'Business Casual', desc: 'Navy blazer, beige chinos, loafers' },
          { id: 3, title: 'Summer Vibes', desc: 'Floral shirt, khaki shorts, sandals' },
        ],
      }
      setMessages((prev) => [...prev, aiResponse])
      setOutfits(aiResponse.outfits)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full w-full p-6 space-y-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-lg max-w-xl ${
              msg.role === 'user' ? 'bg-purple-100 self-end text-right' : 'bg-pink-100 self-start text-left'
            }`}
          >
            <p className="text-sm whitespace-pre-line">{msg.text}</p>
          </div>
        ))}

        {outfits.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outfits.map((outfit) => (
              <Card key={outfit.id} className="hover:shadow-md transition">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{outfit.title}</h3>
                  <p className="text-sm text-gray-600">{outfit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2 border-t pt-4">
        <Input
          placeholder="Describe your style needs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSend}>
          <Sparkles className="w-4 h-4 mr-2" />
          Ask AI
        </Button>
      </div>
    </div>
  )
}
