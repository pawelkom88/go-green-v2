import FavoritesIcon from "../icons/FavoritesIcon";
import LocationIcon from "../icons/LocationIcon";
import SettingsIcon from "../icons/SettingsIcon";

const mobileIconsTextCommonStyles = "text-xs text-[var(--primary-clr)]";

const MobileMenu = () => {
  // do not add any state try to pass it in ! make a dummy component - separate more ?
  //   make active button different bg

  return (
    <div className="fixed bottom-0 inset-x-0 border-t-2 border-[var(--secondary-clr)] flex md:hidden">
      <div className="flex justify-around w-full p-4">
        <button>
          <LocationIcon
            styles={{ color: "var(--primary-clr)", margin: "auto" }}
          />
          <span className={mobileIconsTextCommonStyles}>Location</span>
        </button>

        <button>
          <FavoritesIcon
            styles={{ color: "var(--secondary-clr)", margin: "auto" }}
          />
          <span className={mobileIconsTextCommonStyles}>Favorites</span>
        </button>
        <button>
          <SettingsIcon
            styles={{ color: "var(--primary-clr)", margin: "auto" }}
          />
          <span className={mobileIconsTextCommonStyles}>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
