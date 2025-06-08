'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Heart } from 'lucide-react';

export default function WardrobePage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Virtual Wardrobe</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Take Photo</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">+ Add Item</Button>
        </div>
      </div>
      <p className="text-gray-600 mb-4">Organize and manage your clothing collection - completely free</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {[
          { label: 'Total Items', value: 8 },
          { label: 'Favorites', value: 5 },
          { label: 'Outfits Created', value: 156, color: 'text-purple-600' },
          { label: 'Total Value', value: '$670', color: 'text-green-600' },
          { label: 'Storage Limit', value: '∞', color: 'text-orange-600' },
        ].map((stat, i) => (
          <Card key={i} className="text-center">
            <CardContent className="py-4">
              <p className={`text-xl font-bold ${stat.color || ''}`}>{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Input placeholder="Search your wardrobe..." className="max-w-xs" />
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="tops">Tops</SelectItem>
            <SelectItem value="bottoms">Bottoms</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Colors" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Date Added" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Sort</Button>
        <Button variant="outline"><Heart className="w-4 h-4 mr-1" /> Favorites Only</Button>
      </div>

      <div className="text-sm text-gray-600 mb-2">Showing 8 of 8 items</div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="relative">
            <CardContent className="flex items-center justify-center h-32 bg-gray-100 text-xs text-gray-400">
              Demo
            </CardContent>
            <div className="absolute top-2 right-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
