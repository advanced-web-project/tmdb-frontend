import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import { StarRating } from './star-rating';
import { MoreHorizontal, Heart, Bookmark, Star } from 'lucide-react';

export default function DropdownInteraction() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="w-8 h-8 z-1000 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={5}
        className="w-40 z-[1100] bg-white shadow-lg rounded-[10px] p-2 border-gray-200 bottom-2"
      >
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-100 flex my-1">
          <Heart className="mr-2 mt-1 h-4 w-4" />
          <span>Favorite</span>
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-100 flex my-1">
          <Bookmark className="mr-2 mt-1 h-4 w-4" />
          <span>Watchlist</span>
        </DropdownMenuItem>
        <hr />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-gray-700 hover:bg-gray-100 flex my-1">
            <Star className="mr-2 mt-1 h-4 w-4" />
            <span>Your rating</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="mt-4 bg-white z-[1000] border-gray-200 rounded-[10px]">
              <StarRating
                onRate={(rating) => {
                  console.log(`Rated ${rating} stars`);
                }}
              />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
