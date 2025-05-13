
import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oneplus-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 - Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Phones</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Earbuds</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Wearables</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Accessories</Link></li>
            </ul>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Our Story</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Press</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Careers</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Brand</Link></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Help Center</Link></li>
              <li><Link to="/support" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Contact Us</Link></li>
              <li><Link to="/support" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Warranty</Link></li>
              <li><Link to="/support" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Repair Service</Link></li>
            </ul>
          </div>

          {/* Column 4 - Community */}
          <div>
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/community" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Forums</Link></li>
              <li><Link to="/community" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Events</Link></li>
              <li><Link to="/community" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">User Stories</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 hover:text-oneplus-red transition-all">Blog</Link></li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="opacity-80 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 w-full bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-oneplus-red" 
              />
              <button 
                type="submit" 
                className="bg-oneplus-red p-2 rounded-r-md"
                aria-label="Subscribe to newsletter"
              >
                <Mail size={20} />
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-oneplus-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-oneplus-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-oneplus-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-oneplus-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer - Copyright & Legal Links */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70 mb-4 md:mb-0">© {new Date().getFullYear()} MobileHub. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 hover:text-oneplus-red transition-all">Terms of Service</Link>
              <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 hover:text-oneplus-red transition-all">Privacy Policy</Link>
              <Link to="/cookies" className="text-sm opacity-70 hover:opacity-100 hover:text-oneplus-red transition-all">Cookie Policy</Link>
              <Link to="/sitemap" className="text-sm opacity-70 hover:opacity-100 hover:text-oneplus-red transition-all">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
