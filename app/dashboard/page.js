'use client';
import { Card,CardContent } from '@/components/ui/card';
import { Shirt, Sparkles } from 'lucide-react';

export default function DashboardPage() {

  return (
     <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to your Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <Shirt className="w-8 h-8 text-purple-600" />
              <div>
                <h2 className="font-semibold">Wardrobe</h2>
                <p className="text-sm text-gray-500">View your clothes</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-pink-600" />
              <div>
                <h2 className="font-semibold">AI Stylist</h2>
                <p className="text-sm text-gray-500">Get outfit recommendations</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
  );
}

// This is a protected page that requires the user to be signed in.