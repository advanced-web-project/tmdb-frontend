import { Play } from 'lucide-react';

import { motion } from 'framer-motion';
import DropdownInteraction from './dropdown-interaction';

function TrailerCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <motion.div className="flex-none w-[300px] rounded-[10px] group">
      <div className="relative aspect-video rounded-[10px] overflow-auto cursor-pointer">
        <img src={image} alt={title} className="relative z-10 w-full h-full object-cover rounded-[10px]" />
        <div className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
        <div className="absolute top-2 right-2 z-30">
          <DropdownInteraction />
        </div>
      </div>

      <div className="mt-3 text-center">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
    </motion.div>
  );
}
export { TrailerCard };
