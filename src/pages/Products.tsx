
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-oneplus-gray">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-lg mb-12">Discover the latest innovations in mobile technology.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This is a placeholder. In a real implementation, this would be populated with product data */}
            <div className="product-card">
              <div className="bg-gray-200 h-64 rounded-t-lg"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Product Coming Soon</h3>
                <p className="text-gray-600">Check back later for updates</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
