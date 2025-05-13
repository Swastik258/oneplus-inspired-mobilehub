
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Product Type definition
interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  tagline: string;
  isNew: boolean;
}

// Sample product data
const products: Product[] = [
  {
    id: '1',
    name: 'MobileHub 11',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    price: '$799',
    tagline: 'Flagship Performance',
    isNew: true
  },
  {
    id: '2',
    name: 'MobileHub 11 Pro',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    price: '$999',
    tagline: 'Ultimate Camera Experience',
    isNew: true
  },
  {
    id: '3',
    name: 'MobileHub 10T',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    price: '$649',
    tagline: 'Speed You Need',
    isNew: false
  },
  {
    id: '4',
    name: 'MobileHub Buds Pro',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    price: '$149',
    tagline: 'Immersive Sound Experience',
    isNew: true
  }
];

const FeaturedProducts = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-oneplus-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured Products</h2>
          <p className="section-subheading">Explore our latest innovations</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover object-center transform transition-transform duration-500 group-hover:scale-105" 
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-oneplus-red text-white text-xs px-3 py-1 rounded-full">
                    NEW
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <Link 
                      to={`/products/${product.id}`} 
                      className="oneplus-btn-primary w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-oneplus-black">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.tagline}</p>
                <p className="text-lg font-semibold text-oneplus-red">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="oneplus-btn-primary">
            View All Products <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
