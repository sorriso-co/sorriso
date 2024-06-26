import React from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-8">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white p-2 rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300 ml-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
