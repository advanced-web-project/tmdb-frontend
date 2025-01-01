import { Plus, Search } from 'lucide-react';
import Button from '../../shared/button';
import { useState, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@radix-ui/react-dialog';
import { Link } from 'react-router-dom';

interface DialogHeaderProps {
  title?: string; // Optional title
  description?: string; // Optional description
  children?: ReactNode; // Supports nested components like the Button in the example
  className?: string; // Optional className for custom styling
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ title, description, children, className = '' }) => {
  return (
    <div className={`dialog-header ${className}`}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && <DialogDescription>{description}</DialogDescription>}
      {children}
    </div>
  );
};

interface MovieList {
  id: string;
  name: string;
  itemCount: number;
}

const defaultLists: MovieList[] = [
  { id: '1', name: 'Movie List', itemCount: 0 },
  { id: '2', name: 'Watchlist', itemCount: 2 },
  { id: '3', name: 'Favorites', itemCount: 5 },
];

export function AddToListDialog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lists, setLists] = useState<MovieList[]>(defaultLists);

  const filteredLists = lists.filter((list) => list.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm text-gray-900 hover:bg-white/10">
          Add to list
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 bg-[#1a1d29] rounded-[10px] absolute top-10 left-[150px] z-[1100]">
        <DialogHeader className="p-0">
          <Button className="w-full font-semibold flex items-center gap-2 bg-[#01b4e4] hover:bg-[#01b4e4]/90 text-white rounded-t-[10px] h-12 flex items-center justify-center">
            <Plus className="h-5 w-5" />
            <Link to="/list/new">Create New List</Link>
          </Button>
        </DialogHeader>
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              placeholder="Search lists..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-9 bg-[#121829] border-[#1f2937] text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-1">
            {filteredLists.map((list) => (
              <Button key={list.id} variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                {list.name} ({list.itemCount} items)
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
