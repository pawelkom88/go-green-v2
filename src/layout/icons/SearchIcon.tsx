import { IconProps } from "./icon-types";

const SearchIcon = ({ styles, size = 25 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      style={styles}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <title>Search Icon</title>
      <desc>
        After clicking the icon user will perform a location search based on
        input
      </desc>
    </svg>
  );
};

export default SearchIcon;
