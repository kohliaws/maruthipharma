import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Authentic South Indian
              <span className="block text-yellow-300">Breakfast Experience</span>
            </h1>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl">
              Indulge in traditional flavors with our handcrafted idli, crispy dosa, 
              and aromatic South Indian delicacies made with love and authentic spices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-orange-100">4.9/5 Rating</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Users className="h-5 w-5 text-orange-200 mr-2" />
                <span className="text-orange-100">10,000+ Happy Customers</span>
              </div>
            </div>
            
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors duration-200 shadow-lg">
              Explore Our Menu
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh Idli"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/5560662/pexels-photo-5560662.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Masala Dosa"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.pexels.com/photos/8629861/pexels-photo-8629861.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="South Indian Thali"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Coconut Chutney"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;