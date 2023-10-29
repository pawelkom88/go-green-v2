import FilterIcon from "../icons/FilterIcon";
import SearchIcon from "../icons/SearchIcon";

const SearchBox = () => {
  return (
    <div className="relative w-full md:w-1/4 md:absolute md:right-0 flex items-center rounded p-2 md:mr-8">
      {/* // google laces api here */}
      <label className="sr-only" htmlFor="location-search">
        Search the site:
      </label>
      <input
        id="location-search"
        name="searchbar"
        autoComplete="off"
        aria-label="Search location by typing address"
        className="w-full p-2"
        placeholder="Type address here..."
        type="search"
      />
      <div className="absolute inset-y-0 right-0 pr-6 flex items-center space-x-6">
        <button>
          <SearchIcon styles={{ color: "var(--primary-clr)" }} />
        </button>
        <button>
          <FilterIcon styles={{ color: "var(--primary-clr)" }} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
