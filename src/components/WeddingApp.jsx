import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Music, Clock } from 'lucide-react';

const WeddingApp = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setAnimate(true);
  }, []);

  const programs = [
    { time: "3:00 PM", event: "Wedding Ceremony", location: "Main Chapel" },
    { time: "4:30 PM", event: "Cocktail Hour", location: "Garden Terrace" },
    { time: "6:00 PM", event: "Reception & Dinner", location: "Grand Ballroom" },
    { time: "8:00 PM", event: "Dancing", location: "Grand Ballroom" },
    { time: "11:00 PM", event: "Sparkler Send-off", location: "Main Entrance" }
  ];

  const WelcomePage = () => (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-pink-50 to-pink-100 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <Heart 
        className={`text-pink-500 mb-8 transition-transform duration-1000 ${animate ? 'scale-100' : 'scale-0'}`}
        size={64}
      />
      <h1 className={`text-4xl font-serif mb-4 transition-transform duration-1000 delay-300 ${animate ? 'translate-y-0' : 'translate-y-10'}`}>
        Keshav & Aashi
      </h1>
      <p className={`text-xl mb-8 transition-transform duration-1000 delay-500 ${animate ? 'translate-y-0' : 'translate-y-10'}`}>
        Request the pleasure of your company
      </p>
      <p className={`text-2xl mb-8 transition-transform duration-1000 delay-700 ${animate ? 'translate-y-0' : 'translate-y-10'}`}>
        March 1st, 2025
      </p>
      <button
        onClick={() => setShowSecondPage(true)}
        className={`bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        View Details
      </button>
    </div>
  );

  const ProgramPage = () => (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setShowSecondPage(false)}
          className="mb-6 text-pink-500 hover:text-pink-600 flex items-center gap-2"
        >
          ← Back
        </button>
        
        <h2 className="text-3xl font-serif text-center mb-8">Wedding Program</h2>
        
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-pink-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <Clock className="text-pink-500" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{program.event}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {program.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {program.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">
            We look forward to celebrating with you!
          </p>
          <div className="flex justify-center gap-4">
            <Calendar size={24} className="text-pink-500" />
            <MapPin size={24} className="text-pink-500" />
            <Music size={24} className="text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );

  return showSecondPage ? <ProgramPage /> : <WelcomePage />;
};

export default WeddingApp;
