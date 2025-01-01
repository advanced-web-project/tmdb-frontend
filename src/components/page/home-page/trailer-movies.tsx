import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrailerCard } from './trailer-card';
import { trailerTabs } from '../../../data/tabs';
import { trailerMovies } from '../../../data/trailer-movies';

export function TrailerSection() {
  const [activeTrailerTab, setActiveTrailerTab] = useState(trailerTabs[0].id);

  return (
    <section className="py-8 bg-gradient-to-r from-[#042541] to-[#01b4e4]">
      <div className="container px-10 mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-2xl font-bold text-white">Latest Trailers</h2>
          <div className="relative inline-flex h-[34px] p-[2px] rounded-full bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]">
            <div className="flex w-full h-full rounded-full bg-[#042541]/95 ">
              {trailerTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTrailerTab(tab.id)}
                  className={`relative z-10 px-4 py-1 text-sm font-medium transition-colors duration-300 rounded-full whitespace-nowrap ${
                    activeTrailerTab === tab.id ? 'text-[#042541]' : 'text-white hover:text-white/80'
                  }`}
                >
                  {activeTrailerTab === tab.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-rounded pb-6 gap-4 no-scrollbar">
          {trailerMovies.map((movie, i) => (
            <TrailerCard key={i} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
