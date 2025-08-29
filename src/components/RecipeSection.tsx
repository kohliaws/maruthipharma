import React, { useState } from 'react';
import { Clock, Users, ChefHat, Flame } from 'lucide-react';
import { recipeData } from '../data/recipeData';

const RecipeSection: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(recipeData[0]);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional Recipes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn to cook authentic South Indian dishes with our time-honored family recipes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recipe Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a Recipe</h3>
            <div className="space-y-4">
              {recipeData.map((recipe, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedRecipe(recipe)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    selectedRecipe.name === recipe.name
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold">{recipe.name}</h4>
                      <p className={`text-sm ${
                        selectedRecipe.name === recipe.name ? 'text-orange-100' : 'text-gray-500'
                      }`}>
                        {recipe.difficulty} • {recipe.cookTime} mins
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="w-full h-72 object-cover"
              />
              
              <div className="p-8 bg-gradient-to-b from-white to-orange-50">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedRecipe.name}</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedRecipe.description}</p>
                
                {/* Recipe Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Prep Time</div>
                    <div className="font-semibold text-gray-900">{selectedRecipe.prepTime} mins</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <ChefHat className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Cook Time</div>
                    <div className="font-semibold text-gray-900">{selectedRecipe.cookTime} mins</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Serves</div>
                    <div className="font-semibold text-gray-900">{selectedRecipe.serves} people</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Flame className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Difficulty</div>
                    <div className="font-semibold text-gray-900">{selectedRecipe.difficulty}</div>
                  </div>
                </div>
                
                {/* Ingredients */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Instructions */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h3>
                  <div className="space-y-4">
                    {selectedRecipe.instructions.map((instruction, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;