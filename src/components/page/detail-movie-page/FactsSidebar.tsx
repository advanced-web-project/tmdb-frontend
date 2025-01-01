import React from 'react';
import { MovieKeywords } from '../../../type/movie/keyword.type';
import MovieDetails from '../../../type/movie/movie_detail.type';
import { languages } from '../../../data/language';

interface FactsSidebarProps {
  detailMovie: MovieDetails;
  keywords: MovieKeywords['keywords'];
}

const formatterMoney = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2, // Ensures two decimal places
  maximumFractionDigits: 2,
});

export const FactsSidebar: React.FC<FactsSidebarProps> = ({ detailMovie, keywords }) => {
  return (
    <div className="w-full lg:w-[300px] p-0 space-y-6">
      <div className="facts-section space-y-4">
        <h2 className="text-[1.1em] font-semibold">Facts</h2>
        <div className="space-y-4">
          <div className="fact-item">
            <h3 className="text-[1em] font-semibold text-[#000000]">Status</h3>
            <p className="text-[1em] text-[#000000] mt-0.5">{detailMovie.status}</p>
          </div>

          <div className="fact-item">
            <h3 className="text-[1em] font-semibold text-[#000000]">Original Language</h3>
            <p className="text-[1em] text-[#000000] mt-0.5">
              {languages[detailMovie.original_language as keyof typeof languages]}
            </p>
          </div>
          <div className="fact-item">
            <h3 className="text-[1em] font-semibold text-[#000000]">Budget</h3>
            <p className="text-[1em] text-[#000000] mt-0.5">{formatterMoney.format(detailMovie.budget)}</p>
          </div>
          <div className="fact-item">
            <h3 className="text-[1em] font-semibold text-[#000000]">Revenue</h3>
            <p className="text-[1em] text-[#000000] mt-0.5">{formatterMoney.format(detailMovie.revenue)}</p>
          </div>
        </div>
      </div>

      <div className="keywords-section mt-6">
        <h3 className="text-[1em] font-semibold mb-2 text-[#000000]">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword.id}
              className="px-2 py-1 bg-[#E5E5E5] text-[#000000] text-[0.9em] rounded-[4px] 
                       hover:bg-[#D7D7D7] cursor-pointer transition-colors duration-200"
            >
              {keyword.name}
            </span>
          ))}
        </div>
      </div>
      {/* 
      <div className="content-score-section mt-6">
        <h3 className="text-[1em] font-semibold mb-2 text-[#000000]">Content Score</h3>
        <div className="bg-[#E5E5E5] p-3 rounded-[4px]">
          <div className="text-[1.6em] font-bold text-[#000000]">100</div>
          <div className="text-[0.9em] text-[#000000] mt-0.5">Yes! Looking good!</div>
        </div>
      </div> */}

      {/* <div className="contributors-section mt-6">
        <h3 className="text-[1em] font-semibold mb-2 text-[#000000]">Top Contributors</h3>
        <div className="space-y-2">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="flex items-center gap-2 group cursor-pointer">
              <img src={contributor.avatar} alt={contributor.name} className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-[1em] font-semibold text-[#000000] group-hover:text-[#01B4E4] transition-colors">
                  {contributor.name}
                </div>
                <div className="text-[0.9em] text-[#666666]">{contributor.points} pts</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
