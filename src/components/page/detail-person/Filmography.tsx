import { useState, useEffect } from 'react';
import MoviePreview from './MoviePreview';

interface Entry {
  year: number;
  title: string;
  episodes?: string;
  role: string;
  description?: string;
  rating?: number;
  image?: string;
}

const entries: Entry[] = [
  {
    year: 2024,
    title: 'Jentry Chau vs the Underworld',
    role: 'Moonie / Imprisoned Ghost (voice)',
    description:
      "As her 16th birthday approaches, a not-so-average teen rediscovers the fiery powers she's long suppressed and is force...",
    rating: 8.7,
    image: 'https://media.themoviedb.org/t/p/w220_and_h330_face/szpzEL2rjXQLzaoZqH1EnBQWtZE.jpg',
  },
  {
    year: 2024,
    title: 'Nobody Nothing Nowhere',
    role: 'Ruth',
    description:
      'The story of Ruth, one of the Non-People, human-looking beings created and trained for the sole purpose of filling in a realistic...',
    rating: 0.0,
    image: 'https://media.themoviedb.org/t/p/w220_and_h330_face/szpzEL2rjXQLzaoZqH1EnBQWtZE.jpg',
  },
  {
    year: 2024,
    title: 'Red One',
    role: 'Zoe',
    description:
      "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most elite special forces to save Christmas...",
    rating: 6.984,
    image: 'https://media.themoviedb.org/t/p/w220_and_h330_face/szpzEL2rjXQLzaoZqH1EnBQWtZE.jpg',
  },
  {
    year: 2024,
    title: 'Mufasa: The Lion King',
    role: 'Sarabi (voice)',
  },
  {
    year: 2024,
    title: 'The Big Cigar',
    episodes: '6 episodes',
    role: 'Gwen Fontaine',
  },
  {
    year: 2021,
    title: 'Nine Perfect Strangers',
    episodes: '8 episodes',
    role: 'Delilah',
  },
  {
    year: 2020,
    title: 'The Midnight Sky',
    role: 'Maya',
  },
  {
    year: 2020,
    title: 'Little Fires Everywhere',
    episodes: '2 episodes',
    role: 'Young Mia',
  },
  {
    year: 2020,
    title: 'Hunters',
    episodes: '18 episodes',
    role: 'Roxy Jones',
  },
];

export function Filmography() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<{ entry: Entry; position: { x: number; y: number } } | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  const handleCircleClick = (entry: Entry, event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    if (selectedEntry?.entry.title === entry.title) {
      setSelectedEntry(null);
    } else {
      setSelectedEntry({
        entry,
        position: {
          x: rect.left,
          y: rect.top,
        },
      });
    }
  };

  // Close preview when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (selectedEntry) {
        setSelectedEntry(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedEntry]);

  // Close preview when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedEntry && !(event.target as Element).closest('.movie-preview')) {
        setSelectedEntry(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedEntry]);

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Acting</h2>
        <div className="flex gap-2">
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>All</option>
          </select>
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Department</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto border rounded-[10px] shadow-sm">
        <div className="relative">
          <table className="w-full">
            <tbody>
              {entries.map((entry, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 transition-colors duration-200 hover:bg-blue-50/50"
                  onMouseEnter={() => setHoveredRow(`${index}`)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="py-4 pr-4 whitespace-nowrap font-medium text-[15px] w-24">
                    <div className="flex items-center ml-4">
                      <span className="text-gray-900 mr-6">{entry.year}</span>
                      <button onClick={(e) => handleCircleClick(entry, e)} className="relative group">
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-2 transition-colors
                            ${selectedEntry?.entry.title === entry.title ? 'border-blue-600' : 'border-gray-400'}
                          `}
                        />
                        <div
                          className={`absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 
                            rounded-full transition-opacity
                            ${
                              selectedEntry?.entry.title === entry.title
                                ? 'bg-blue-600 opacity-100'
                                : hoveredRow === `${index}`
                                  ? 'bg-gray-400 opacity-100'
                                  : 'opacity-0'
                            }
                          `}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 pr-6">
                    <div
                      className={`font-medium text-[15px] transition-colors cursor-pointer
                        ${hoveredTitle === `${index}` ? 'text-blue-600' : 'text-gray-900'}
                      `}
                      onMouseEnter={() => setHoveredTitle(`${index}`)}
                      onMouseLeave={() => setHoveredTitle(null)}
                    >
                      {entry.title}
                    </div>
                    <div className="text-[13px] ml-3 text-gray-500 mt-0.5">
                      {entry.episodes && `(${entry.episodes}) `}as {entry.role}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedEntry && (
        <MoviePreview
          title={selectedEntry.entry.title}
          description={selectedEntry.entry.description || ''}
          rating={selectedEntry.entry.rating}
          image={selectedEntry.entry.image}
          style={{
            top: `${selectedEntry.position.y - 190}px`,
            left: `${selectedEntry.position.x - 250}px`,
          }}
        />
      )}
    </section>
  );
}
