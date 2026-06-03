import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    const samplePortfolio = [
      {
        id: 1,
        title: 'Modern Living Room',
        description: 'Contemporary design with warm tones',
        imageUrl: 'https://images.unsplash.com/photo-1565182999555-0de1f7c4e5e0?w=500&h=500&fit=crop',
        category: 'Living Room'
      },
      {
        id: 2,
        title: 'Minimalist Bedroom',
        description: 'Clean lines and spacious design',
        imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&h=500&fit=crop',
        category: 'Bedroom'
      },
      {
        id: 3,
        title: 'Elegant Kitchen',
        description: 'Luxury kitchen with modern appliances',
        imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
        category: 'Kitchen'
      },
      {
        id: 4,
        title: 'Home Office',
        description: 'Productive workspace design',
        imageUrl: 'https://images.unsplash.com/photo-1593642632505-c2ca9c41b3c3?w=500&h=500&fit=crop',
        category: 'Office'
      },
      {
        id: 5,
        title: 'Bathroom Spa',
        description: 'Luxurious bathroom renovation',
        imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
        category: 'Bathroom'
      },
      {
        id: 6,
        title: 'Commercial Space',
        description: 'Modern office interior design',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop',
        category: 'Commercial'
      }
    ];
    setPortfolioData(samplePortfolio);

    const sampleTestimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Homeowner',
        message: 'Amazing work! Transformed our space completely. Highly recommended!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
      },
      {
        id: 2,
        name: 'Michael Chen',
        title: 'Business Owner',
        message: 'Professional and creative. Our office looks incredible now!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        title: 'Interior Enthusiast',
        message: 'Attention to detail is outstanding. Worth every penny!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
      }
    ];
    setTestimonialData(sampleTestimonials);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Portfolio data={portfolioData} />
      <Services />
      <Testimonials data={testimonialData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
