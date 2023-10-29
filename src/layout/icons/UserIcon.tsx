import { IconProps } from "./icon-types";

const UserIcon = ({ styles, size = 25 }: IconProps) => {
  return (
    <svg
      style={styles}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title>User Icon</title>
      <desc>After clicking the icon user will see his profile page</desc>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};

export default UserIcon;
