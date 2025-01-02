interface HeaderListProps {
  title: string;
  totalMovie: number;
}
const HeaderList: React.FC<HeaderListProps> = ({ title, totalMovie }) => {
  return (
    <header className="flex px-4 items-center justify-between mb-8">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <nav className="flex gap-6">
          <button className="relative text-[17px] font-semibold">
            Movies
            <span className="ml-1 text-pink-500">{totalMovie}</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></div>
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Filter by:</span>
          <button className="flex items-center gap-1 text-pink-500">
            Date Added
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Order:</span>
          <button className="p-1 rounded hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
export default HeaderList;
