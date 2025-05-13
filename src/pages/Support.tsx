
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-oneplus-gray">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-6">Support</h1>
          <p className="text-lg mb-12">Get help with your products and services.</p>
          
          {/* This is a placeholder. In a real implementation, this would contain the Support content */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Help Center</h2>
            <p className="text-gray-700 mb-6">Content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
