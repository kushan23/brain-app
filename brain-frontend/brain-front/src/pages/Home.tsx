import { BookmarkPlus, Youtube, Twitter, Share2, Brain, Sparkles, Library, Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="container px-4 py-16 mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Brain className="w-12 h-12 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Second Brain</h1>
        </div>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
          Your personal knowledge hub for storing and sharing content from across the web.
          Save videos, tweets, and more for easy access later.
        </p>
        <button onClick={() => navigate('/signin') } className="px-8 py-3 font-semibold text-white transition-colors bg-purple-600 rounded-full hover:bg-purple-700">
          Get Started
        </button>
      </header>

      {/* Features Grid */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* YouTube Feature */}
          <div className="p-6 transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
            <Youtube className="w-10 h-10 mb-4 text-red-500" />
            <h3 className="mb-2 text-xl font-semibold">Save YouTube Videos</h3>
            <p className="text-gray-600">
              Store your favorite videos and tutorials for later viewing. Never lose track of valuable content.
            </p>
          </div>

          {/* Twitter Feature */}
          <div className="p-6 transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
            <Twitter className="w-10 h-10 mb-4 text-blue-400" />
            <h3 className="mb-2 text-xl font-semibold">Bookmark Tweets</h3>
            <p className="text-gray-600">
              Save important tweets and threads. Build your personal knowledge base from Twitter's wisdom.
            </p>
          </div>

          {/* Share Feature */}
          <div className="p-6 transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
            <Share2 className="w-10 h-10 mb-4 text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">Share Collections</h3>
            <p className="text-gray-600">
              Share your curated lists with friends and colleagues. Spread knowledge effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">How It Works</h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="flex flex-col items-center max-w-xs text-center">
              <BookmarkPlus className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">Save Content</h3>
              <p className="text-gray-600">Simply click to save any video or tweet you want to remember</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center">
              <Library className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">Organize</h3>
              <p className="text-gray-600">Create collections and categorize your saved content</p>
            </div>
            <div className="flex flex-col items-center max-w-xs text-center">
              <Users className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">Share</h3>
              <p className="text-gray-600">Share your collections with friends or keep them private</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="p-8 bg-purple-50 rounded-2xl md:p-12">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-purple-600" />
          <h2 className="mb-4 text-3xl font-bold">Ready to Build Your Second Brain?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Join thousands of users who are already organizing their digital knowledge with Second Brain.
          </p>
          <button onClick={() => navigate('/signin') } className="px-8 py-3 font-semibold text-white transition-colors bg-purple-600 rounded-full hover:bg-purple-700">
            Start Saving Content
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Brain className="w-6 h-6 text-gray-400" />
            <p className="text-gray-500">© 2025 Second Brain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
