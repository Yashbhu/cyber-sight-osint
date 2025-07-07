
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Search, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    extraTerms: ''
  });
  const [isSearching, setIsSearching] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const osintQuotes = [
    "Information is the currency of the digital age.",
    "In data we trust, in ethics we must.",
    "Intelligence gathering with moral boundaries.",
    "Knowledge is power, responsibility is wisdom.",
    "The art of finding needles in digital haystacks.",
    "Privacy and transparency in perfect balance."
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    setHasResults(false);
    
    // Simulate quote rotation during search
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % osintQuotes.length);
    }, 2000);

    // Simulate search processing
    setTimeout(() => {
      clearInterval(quoteInterval);
      setIsSearching(false);
      setHasResults(true);
    }, 6000);
  };

  const handleGenerateReport = () => {
    console.log('Generating report...');
    // Here you would implement report generation
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Video */}
      <video 
        className="bg-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2023/04/17/158948-819720853_large.mp4" type="video/mp4" />
      </video>

      {/* Vertical Navbar */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-black/80 backdrop-blur-sm border-r border-green-400/30 flex flex-col items-center py-8 z-10">
        <Button
          onClick={() => navigate('/')}
          className="w-12 h-12 bg-transparent border border-green-400/30 hover:bg-green-400/10 mb-8"
        >
          <ArrowLeft className="w-5 h-5 text-green-400" />
        </Button>
        <div className="flex flex-col space-y-6">
          <div className="w-1 h-8 bg-green-400/50 rounded-full"></div>
          <div className="w-1 h-4 bg-green-400/30 rounded-full"></div>
          <div className="w-1 h-6 bg-green-400/40 rounded-full"></div>
        </div>
      </nav>

      <div className="ml-20 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-2xl space-y-8">
          
          {/* Search Form */}
          <Card className="bg-black/60 backdrop-blur-sm border-green-400/30 p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-green-400 glow-text mb-2">OSINT Search</h1>
                <p className="text-green-300/70">Enter search parameters below</p>
              </div>

              {/* Disclaimer */}
              <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                <p className="text-red-300 text-sm">
                  <strong>Disclaimer:</strong> Do not use this tool for stalking or illegal purposes.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-green-300">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-black/40 border-green-400/30 text-green-100 focus:border-green-400"
                    placeholder="Enter target name"
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-green-300">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="bg-black/40 border-green-400/30 text-green-100 focus:border-green-400"
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <Label htmlFor="extraTerms" className="text-green-300">Extra Terms</Label>
                  <Input
                    id="extraTerms"
                    value={formData.extraTerms}
                    onChange={(e) => setFormData({...formData, extraTerms: e.target.value})}
                    className="bg-black/40 border-green-400/30 text-green-100 focus:border-green-400"
                    placeholder="Additional search terms"
                  />
                </div>
              </div>

              <Button
                onClick={handleSearch}
                disabled={isSearching || !formData.name}
                className="w-full bg-green-400 hover:bg-green-300 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>{isSearching ? 'Searching...' : 'Search'}</span>
              </Button>
            </div>
          </Card>

          {/* Processing Quotes */}
          {isSearching && (
            <Card className="bg-black/60 backdrop-blur-sm border-green-400/30 p-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-green-300 text-lg italic transition-all duration-1000">
                  "{osintQuotes[currentQuote]}"
                </p>
                <p className="text-green-400/70">Processing your request...</p>
              </div>
            </Card>
          )}

          {/* Results */}
          {hasResults && (
            <Card className="bg-black/60 backdrop-blur-sm border-green-400/30 p-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-green-400">Search Results</h2>
                
                <div className="space-y-4">
                  <div className="bg-green-400/10 border border-green-400/30 p-4 rounded-lg">
                    <h3 className="text-green-300 font-semibold">Digital Footprint Analysis</h3>
                    <p className="text-green-200/70 text-sm mt-2">
                      Found {Math.floor(Math.random() * 50) + 10} data points across various platforms
                    </p>
                  </div>
                  
                  <div className="bg-green-400/10 border border-green-400/30 p-4 rounded-lg">
                    <h3 className="text-green-300 font-semibold">Social Media Presence</h3>
                    <p className="text-green-200/70 text-sm mt-2">
                      {Math.floor(Math.random() * 5) + 2} platforms identified with public information
                    </p>
                  </div>
                  
                  <div className="bg-green-400/10 border border-green-400/30 p-4 rounded-lg">
                    <h3 className="text-green-300 font-semibold">Professional Networks</h3>
                    <p className="text-green-200/70 text-sm mt-2">
                      Career and business connections mapped
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateReport}
                  className="w-full bg-green-400 hover:bg-green-300 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Generate Report
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
