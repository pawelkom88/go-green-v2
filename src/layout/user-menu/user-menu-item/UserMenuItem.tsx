import { Link } from "react-router-dom";
import { slugifyTitle } from "@src/utils/functions";

interface UserMenuItem {
  icon: JSX.Element;
  title: string;
}

function UserMenuItem({ icon, title }: UserMenuItem) {
  return (
    <li key={title} className="mb-6">
      <Link
        to={`/${slugifyTitle(title)}`}
        className="w-full flex flex-col items-center justify-center gap-2">
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default UserMenuItem;
