
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-oneplus-black">OnePlus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/support" className="nav-link">Support</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} />
            </button>
            <button aria-label="User account" className="p-2 rounded-full hover:bg-gray-100">
              <User size={20} />
            </button>
            <button aria-label="Shopping cart" className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md animate-fade-in`}>
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
          <Link to="/products" className="block py-3 border-b border-gray-200" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" className="block py-3 border-b border-gray-200" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/support" className="block py-3 border-b border-gray-200" onClick={() => setIsOpen(false)}>Support</Link>
          <Link to="/community" className="block py-3 border-b border-gray-200" onClick={() => setIsOpen(false)}>Community</Link>
          <Link to="/blog" className="block py-3 border-b border-gray-200" onClick={() => setIsOpen(false)}>Blog</Link>
          <div className="flex items-center justify-evenly py-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} />
            </button>
            <button aria-label="User account" className="p-2 rounded-full hover:bg-gray-100">
              <User size={20} />
            </button>
            <button aria-label="Shopping cart" className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
