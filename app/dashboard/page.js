'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return null; // Optionally, render a loading indicator
  }

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-600">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Wardrobe Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">89</p>
            <p className="text-sm text-gray-500">+5 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Outfits Created</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">127</p>
            <p className="text-sm text-gray-500">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Favorite Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">23</p>
            <p className="text-sm text-gray-500">Most loved</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Button variant="outline" className="text-purple-600 hover:text-pink-600" onClick={() => router.push('/')}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}

// This is a protected page that requires the user to be signed in.