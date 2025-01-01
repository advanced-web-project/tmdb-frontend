import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Range } from 'react-range';
import { genres } from '../../../data/genres';

import Button from '../../shared/button';
export default function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const [userScore, setUserScore] = useState([0, 10]);

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
  };
  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  };

  const trendings = ['This week', 'Today'];

  return (
    <div className="relative w-full max-w-[250px] mb-4">
      <Button
        className="w-full h-12 flex justify-between items-center p-4 rounded-[8px] border border-gray-200 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg  font-semibold text-dark">Filters</span>
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight className="h-5 w-5" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 left-0 right-0 mt-1 rounded-[8px] shadow-lg z-50 max-h-[140vh]  border border-gray-200 shadow-sm bg-[#fff]"
          >
            <div className="p-4 space-y-6">
              {/* Release Dates Section */}
              <div className="space-y-3">
                <h3 className="text-base font-normal text-gray-500">Release Dates</h3>
                <div className="space-y-2">
                  <div className="grid gap-3">
                    <div className="relative flex align-center justify-between">
                      <p className="text-sm font-normal text-gray-500">From</p>
                      <input
                        type="date"
                        id="datePicker"
                        value={fromDate}
                        onChange={handleFromDateChange}
                        className="ml-5 px-2 w-full h-8 pr-10 text-sm border rounded-[8px]"
                      />
                    </div>
                    <div className="relative flex align-center justify-between">
                      <p className="text-sm font-normal text-gray-500">To</p>
                      <input
                        type="date"
                        id="datePicker"
                        value={toDate}
                        onChange={handleToDateChange}
                        className="ml-5 px-2 w-full h-8 pr-10 text-sm border rounded-[8px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              {/* Genres Section */}
              <div className="space-y-3">
                <h3 className="text-base font-normal text-gray-500">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50 transition-colors"
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
              <hr />
              {/* Trending Section */}
              <div className="space-y-3">
                <h3 className="text-base font-normal text-gray-500">Trending</h3>
                <div className="flex flex-wrap gap-2">
                  {trendings.map((trending) => (
                    <button
                      key={trending}
                      className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50 transition-colors"
                    >
                      {trending}
                    </button>
                  ))}
                </div>
              </div>
              <hr />
              {/* User Score Section */}
              <div className="space p-2">
                <h3 className="text-base font-normal text-gray-500 mb-5">User Score</h3>
                <Range
                  step={1}
                  min={0}
                  max={10}
                  values={userScore}
                  onChange={(newValues: number[]) => setUserScore(newValues)}
                  renderTrack={({ props, children }: RangeProps['renderTrack']) => (
                    <div
                      {...props}
                      className="h-2 w-full bg-gray-200 rounded-lg"
                      style={{
                        ...props.style,
                        background: `linear-gradient(to right, #03a9f4 ${((userScore[0] - 0) / 10) * 100}%, #03a9f4 ${
                          ((userScore[1] - 0) / 10) * 100
                        }%, #e2e8f0 ${((userScore[1] - 0) / 10) * 100}%)`,
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, index }: RangeProps['renderThumb']) => (
                    <div
                      {...props}
                      className="h-6 w-6 bg-blue-500 rounded-full border-2 border-white shadow-md flex items-center justify-center"
                      style={{ ...props.style }}
                    >
                      <span className="text-xs text-white font-bold">{userScore[index]}</span>
                    </div>
                  )}
                />
                <div className="flex justify-between mt-2 text-gray-500 text-sm">
                  <span>0</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
