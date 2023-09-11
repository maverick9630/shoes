import React from 'react';
import axios from 'axios';
import { Switch } from 'react-router-dom';

const Hero = () => {

  return (
    <div className="bg-indigo-900 text-white py-20 flex">
      <div className="container mx-auto text-left flex-1">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg mt-4">Discover our amazing services and products.</p>
        <button className="bg-indigo-600 text-white px-6 py-2 mt-6 rounded-full hover:bg-indigo-700 hover:text-white">Get Started</button>
      </div>
      <div className="flex-1">
        <img src="your-image-url.jpg" alt="Image" className="h-auto max-w-full" />
      </div>
      
    </div>
  );
}

export default Hero;
