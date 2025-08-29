import React, { useState } from 'react';
import { Menu, Star, Clock, Users, ChefHat, Heart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import RecipeSection from './components/RecipeSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-orange-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Authentic South Indian?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Experience the true flavors of South India with our traditional recipes passed down through generations
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChefHat className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Recipes</h3>
                  <p className="text-gray-600">Traditional South Indian recipes prepared with authentic spices and techniques</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Daily</h3>
                  <p className="text-gray-600">All our dishes are prepared fresh daily using the finest ingredients</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Made with Love</h3>
                  <p className="text-gray-600">Every dish is crafted with care and passion for authentic South Indian cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {activeSection === 'menu' && <MenuSection />}
      {activeSection === 'recipes' && <RecipeSection />}
      {activeSection === 'reviews' && <ReviewSection />}
      
      <Footer />
    </div>
  );
}

export default App;