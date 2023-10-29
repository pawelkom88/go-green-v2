import SettingsIcon from "@layout/icons/SettingsIcon";
import UserIcon from "@layout/icons/UserIcon";
import UserMenuItem from "./user-menu-item/UserMenuItem";

const UserMenu = () => {
  return (
    <ul className="mt-auto">
      {userMenuItems.map(({ title, icon }) => (
        <UserMenuItem key={title} icon={icon} title={title} />
      ))}
    </ul>
  );
};

export default UserMenu;

const userMenuCommonStyles = { display: "inline-block" };

const userMenuItems = [
  {
    title: "Settings",
    icon: <SettingsIcon styles={userMenuCommonStyles} />,
  },
  {
    title: "User Name",
    icon: <UserIcon styles={userMenuCommonStyles} />,
  },
];
