import FavoritesIcon from "@layout/icons/FavoritesIcon";
import { MapIcon } from "@layout/icons/MapIcon";
import SidebarItem from "../sidebar-item/SidebarItem";

interface SidebarItemsProps {
  isCollapsed: boolean;
}

const SidebarItems = ({ isCollapsed }: SidebarItemsProps) => {
  const sidebarItemCommonStyles = `w-full flex flex-col md:flex-row ${
    isCollapsed ? "justify-center" : "justify-start"
  } items-center gap-4 flex-wrap`;

  return (
    <nav className="mb-8">
      <ul>
        {sidebarItems.map(({ title, icon }) => (
          <SidebarItem
            key={title}
            title={title}
            icon={icon}
            className={sidebarItemCommonStyles}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarItems;

const sidebarItems = [
  {
    title: "Map",
    icon: <MapIcon />,
  },
  {
    title: "Favorites",
    icon: <FavoritesIcon />,
  },
];
