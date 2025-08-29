import React, { useState } from 'react';
import { Clock, Star, Leaf } from 'lucide-react';
import { menuData } from '../data/menuData';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const categories = [
    { id: 'breakfast', name: 'Breakfast', count: menuData.breakfast.length },
    { id: 'snacks', name: 'Snacks', count: menuData.snacks.length },
    { id: 'beverages', name: 'Beverages', count: menuData.beverages.length }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Authentic Menu</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the rich flavors of South India with our carefully curated menu featuring traditional recipes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
                />
                {item.isVeg && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Leaf className="h-3 w-3 mr-1" />
                    Veg
                  </div>
                )}
                {item.isPopular && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-gradient-to-b from-white to-orange-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.prepTime} mins
                  </div>
                  <div className="text-2xl font-bold text-orange-600">₹{item.price}</div>
                </div>
                
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({item.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;