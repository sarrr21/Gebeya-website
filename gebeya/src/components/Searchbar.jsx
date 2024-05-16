import { useState } from 'react';

const SearchBar = () => {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search functionality here
    console.log(`Searching in category: ${category}, Query: ${query}`);
  };

  return (
    <div className="border  border-blue-600 flex items-center justify-center ">
      
      <input
        type="text"
        className=" text-sm  pr-12 px-4 py-1  focus:outline-none"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <select
        className="border border-blue-600 text-sm py-1  focus:outline-none"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">All Category</option>
        <option value="category1">  women</option>
        <option value="category2">men</option>
        <option value="category3">electronic</option>
      </select>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold px-4 py-1  focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;