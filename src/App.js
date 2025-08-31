import React from 'react';
import { Book } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-indigo-600 mr-2" />
            <span className="font-bold text-xl">The Quill Shelf</span>
          </div>
          <div className="space-x-4 hidden md:block">
            <button className="text-gray-700 hover:text-indigo-600">Studies</button>
            <button className="text-gray-700 hover:text-indigo-600">Pricing</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Deepen Your Faith Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Monthly Bible studies, devotional guides, and spiritual resources delivered to help you grow closer to God.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Monthly</h3>
            <p className="text-4xl font-bold mb-4">
              $4.99
              <span className="text-gray-500 text-lg">/mo</span>
            </p>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
              Start Monthly
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-indigo-600">
            <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold mb-4">Annual</h3>
            <p className="text-4xl font-bold mb-4">
              $49
              <span className="text-gray-500 text-lg">/yr</span>
            </p>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
              Start Annual
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Lifetime</h3>
            <p className="text-4xl font-bold mb-4">
              $99
              <span className="text-gray-500 text-lg"> once</span>
            </p>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
              Get Lifetime
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;