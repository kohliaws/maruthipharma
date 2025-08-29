import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">SI</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Spice Heritage</h3>
                <p className="text-gray-400">Authentic South Indian Cuisine</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience the true flavors of South India with our traditional recipes 
              passed down through generations. Every dish is crafted with love and authentic spices.
            </p>
            
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-300">123 Heritage Street, Chennai, Tamil Nadu 600001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-300">info@spiceheritage.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white">6:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white">7:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-orange-600 rounded-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-semibold">Special Breakfast Hours: 6:00 AM - 11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Spice Heritage. All rights reserved. Made with ❤️ for authentic South Indian food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;