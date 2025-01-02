import React from 'react';

type Category = 'movie' | 'tv' | 'people' | 'collection' | 'company' | 'keyword';

interface SidebarProps {
  category: Category; // Use Category type instead of string
  setCategory: (category: Category) => void; // Ensure setCategory accepts Category
  results: Record<string, any>;
}

const Sidebar: React.FC<SidebarProps> = React.memo(({ category, setCategory, results }) => {
  const categories: Category[] = ['movie', 'tv', 'people', 'collection', 'company', 'keyword']; // Restrict to valid categories

  return (
    <aside className="w-64 ml-10 mt-5 rounded-lg border-2 h-96 overflow-y-auto">
      <h2 className="text-lg font-bold mb-2 text-center bg-blue-500 text-white p-4 rounded">Search Results</h2>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`cursor-pointer hover:bg-gray-100 flex justify-between py-2 px-3 ${category === cat ? 'bg-gray-200 font-semibold' : ''}`}
            onClick={() => setCategory(cat)}
          >
            <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
            <span className="text-gray-500">{results[cat]?.total_results || 0}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default Sidebar;
