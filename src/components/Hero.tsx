
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-oneplus-black text-white h-[85vh] overflow-hidden">
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-oneplus-black to-transparent opacity-90 z-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Discover the <span className="text-oneplus-red">Power</span> of Speed
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Experience lightning-fast performance with our newest flagship phone, designed for those who demand excellence in every detail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Link to="/products" className="oneplus-btn-primary">
              Shop Now <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/products/flagship" className="oneplus-btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
