import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: JSX.Element;
  title: string;
  className?: string;
}

const SidebarItem = ({ icon, title, className }: SidebarItemProps) => {
  return (
    <li className="mb-6">
      <Link to={`/${title.toLowerCase()}`} className={className}>
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
