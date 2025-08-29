import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

const ReviewSection: React.FC = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Absolutely authentic South Indian food! The idli was so soft and fluffy, just like my grandmother used to make. The coconut chutney was perfect.",
      date: "2 days ago",
      dish: "Idli with Coconut Chutney",
      helpful: 12
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Best masala dosa in the city! The crispy texture and the spicy potato filling brought back memories of my trips to Chennai. Highly recommended!",
      date: "1 week ago",
      dish: "Masala Dosa",
      helpful: 8
    },
    {
      name: "Anitha Reddy",
      rating: 4,
      comment: "Great authentic flavors and reasonable prices. The sambhar was particularly good. Service was quick and friendly. Will definitely visit again!",
      date: "2 weeks ago",
      dish: "Mini Idli Sambhar",
      helpful: 15
    },
    {
      name: "Venkat Iyer",
      rating: 5,
      comment: "Finally found a place that serves authentic Tamil food! The filter coffee was excellent, and the vada was crispy and perfectly spiced.",
      date: "3 weeks ago",
      dish: "Medu Vada & Filter Coffee",
      helpful: 6
    },
    {
      name: "Lakshmi Nair",
      rating: 5,
      comment: "The rasam was divine! It reminded me of home-cooked meals. The staff is knowledgeable about the dishes and very courteous. Loved the experience!",
      date: "1 month ago",
      dish: "Rasam Rice",
      helpful: 9
    }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log('New review submitted:', newReview);
    // Reset form
    setNewReview({ name: '', email: '', rating: 5, comment: '' });
    alert('Thank you for your review!');
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their authentic South Indian dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reviews Display */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900">4.8/5</span>
                <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
              </div>
              
              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <span className="w-12 text-sm text-gray-600">{rating} star</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: rating === 5 ? '80%' : rating === 4 ? '15%' : '5%' }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm text-gray-600">
                      {rating === 5 ? '80%' : rating === 4 ? '15%' : '5%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-600 font-medium">{review.dish}</span>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <button className="flex items-center hover:text-orange-600">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div>
            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
              
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={newReview.email}
                    onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating})}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            rating <= newReview.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300 hover:text-yellow-400'
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;