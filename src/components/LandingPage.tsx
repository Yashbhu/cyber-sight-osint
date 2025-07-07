
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Ethical OSINT Platform';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
        <div className="w-8 h-8 bg-green-400 rounded-lg mb-8 glow-text"></div>
        <div className="flex flex-col space-y-6">
          <div className="w-1 h-8 bg-green-400/50 rounded-full"></div>
          <div className="w-1 h-4 bg-green-400/30 rounded-full"></div>
          <div className="w-1 h-6 bg-green-400/40 rounded-full"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-20 min-h-screen flex items-center">
        <div className="container mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Brain Animation */}
            <div className="flex flex-col items-center space-y-8">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center border-2 border-green-400/30 pulse-border">
                  <div className="w-64 h-64 bg-green-400/10 rounded-full flex items-center justify-center float">
                    <div className="text-8xl">🧠</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full opacity-40 animate-pulse"></div>
              </div>
              
              <Button 
                onClick={handleGetStarted}
                className="bg-green-400 hover:bg-green-300 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
              >
                Get Started
              </Button>
            </div>

            {/* Right Side - Headlines */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight font-mono">
                  <span className="text-white">{typewriterText}</span>
                  <span className="animate-pulse text-green-400">|</span>
                </h1>
                
                <p className="text-xl text-green-300/80 max-w-md leading-relaxed">
                  Advanced intelligence gathering with ethical boundaries and privacy protection at its core.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300/70">Responsible Data Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300/70">Privacy-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300/70">AI-Powered Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
