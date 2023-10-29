import Logo from "@layout/logo/Logo";
import SidebarItems from "./sidebar-items/SidebarItems";
import UserMenu from "@layout/user-menu/UserMenu";
import useCollapsable from "@hooks/sidebar/useCollapsable";
import UncollapseIcon from "@layout/icons/UncollapseIcon";
import CollapseIcon from "@layout/icons/CollapseIcon";

const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useCollapsable();

  return (
    <aside className={`${asideStyles} ${isCollapsed ? "w-24" : "w-56"}`}>
      <div className="mb-8">
        <Logo size={isCollapsed ? 100 : 200} />
      </div>
      <button
        className="absolute right-0"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Uncollapse menu" : "Collapse menu"}>
        {isCollapsed ? (
          <UncollapseIcon size={20} styles={collapsableIconStyles} />
        ) : (
          <CollapseIcon size={20} styles={collapsableIconStyles} />
        )}
      </button>
      <SidebarItems isCollapsed={isCollapsed} />
      <UserMenu />
    </aside>
  );
};

export default Sidebar;

const asideStyles =
  "relative bg-[var(--primary-clr)] text-[var(--text-clr-light)] p-4 hidden border-r-2 border-[var(--secondary-clr)] md:flex flex-col justify-center items-center transition-all duration-50 ease-in-out";

const collapsableIconStyles = {
  fill: "var(--secondary-clr)",
  margin: "auto",
};
