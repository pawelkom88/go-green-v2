import { IconProps } from "./icon-types";

const FilterIcon = ({ styles, size = 25 }: IconProps) => {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      <title>Filter Icon</title>
      <desc>
        After clicking the icon user will see a list with possible options to
        filter charging points by different categories
      </desc>
    </svg>
  );
};

export default FilterIcon;
