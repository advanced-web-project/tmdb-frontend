import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface StarRatingProps {
  onRate?: (rating: number) => void;
}

export function StarRating({ onRate }: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="flex gap-1 p-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          className="relative"
          onHoverStart={() => setHoveredStar(star)}
          onHoverEnd={() => setHoveredStar(null)}
          onClick={() => {
            setRating(star);
            onRate?.(star);
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Star
            className={`w-6 h-6 ${
              (hoveredStar !== null ? star <= hoveredStar : star <= (rating || 0))
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-400'
            } transition-colors duration-150`}
          />
          <span className="sr-only">Rate {star} stars</span>
        </motion.button>
      ))}
    </div>
  );
}
