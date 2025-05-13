
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Promotion = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-oneplus-black z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-fixed bg-center bg-no-repeat opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-xl md:text-2xl mb-8">Get 20% off on all accessories with any phone purchase</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4">Buy a Phone</h3>
              <p className="mb-6">Choose from our latest collection of flagship phones</p>
              <Link to="/products" className="oneplus-btn-primary inline-block">
                Shop Phones
              </Link>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <ArrowRight size={32} className="hidden md:block" />
              <p className="md:hidden text-xl">+</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4">Get 20% Off</h3>
              <p className="mb-6">On all accessories in your order automatically</p>
              <Link to="/products/accessories" className="oneplus-btn-outline inline-block">
                Browse Accessories
              </Link>
            </div>
          </div>
          
          <div className="mt-12 animate-pulse">
            <div className="bg-oneplus-red text-white px-6 py-3 rounded-md inline-flex items-center">
              <span className="mr-2">Use Code:</span>
              <span className="font-bold text-lg">BUNDLE20</span>
            </div>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            Offer valid until June 30, 2025. Cannot be combined with other promotions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
