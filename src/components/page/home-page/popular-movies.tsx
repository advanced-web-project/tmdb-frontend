import { MovieCard } from '../home-page/movie-card';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { popularTabs } from '../../../data/tabs';

import { popularMovies } from '../../../data/popular-movies';

export function PopularMovie() {
  const [activePopularTab, setActivePopularTab] = useState(popularTabs[0].id);

  return (
    <>
      <section className="py-8">
        <div className="container px-4 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4 mb-6">
            <h2 className="text-[1.5rem] font-semibold">Popular Movies</h2>
            <div className="relative inline-flex overflow-x-auto md:h-[34px] rounded-full border-[1px] border-[#042541]/95">
              <div className="flex w-full h-full rounded-full">
                {popularTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePopularTab(tab.id)}
                    className={`relative z-10 px-4 py-1 text-sm font-medium transition-colors duration-300 rounded-full whitespace-nowrap ${
                      activePopularTab === tab.id ? 'text-[#042541]' : 'text-white hover:text-white/80'
                    }`}
                  >
                    {activePopularTab === tab.id && (
                      <motion.div
                        layoutId="active-pill1"
                        className="absolute inset-0 bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 text-gray-900">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-rounded pb-6 gap-4 no-scrollbar">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
