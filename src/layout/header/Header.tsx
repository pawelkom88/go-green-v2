import SearchBox from "../search-box/SearchBox";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex-1 flex flex-col">
      <header className={headerStyles}>
        <SearchBox />
      </header>
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;

const headerStyles =
  "bg-[var(--primary-clr)] md:p-8 flex items-center justify-between md:justify-start border-b-2 border-[var(--secondary-clr)]";
