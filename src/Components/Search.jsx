const Search = () => {
  return (
    <div className="space-y-5 mt-5">
      <div className="flex gap-2">
        <select className="select select-accent w-full max-w-xs">
          <option disabled selected>
            LOCATION
          </option>
          <option>Auto</option>
          <option>Dark mode</option>
          <option>Light mode</option>
        </select>
        <select className="select select-accent w-full max-w-xs">
          <option disabled selected>
            RENT
          </option>
          <option>Auto</option>
          <option>Dark mode</option>
          <option>Light mode</option>
        </select>
      </div>
      <button
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-accent rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-accent transition-all duration-300 transform group-hover:translate-x-full ease">
          Search
        </span>
        <span className="relative invisible">Button Text</span>
      </button>
    </div>
  );
};

export default Search;
