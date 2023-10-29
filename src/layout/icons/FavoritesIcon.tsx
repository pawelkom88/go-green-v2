import { IconProps } from "./icon-types";

const FavoritesIcon = ({ styles, size = 25 }: IconProps) => {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      <title>Favourite icon</title>
      <desc>
        After clicking the icon user will see a list of his favorite charging
        points
      </desc>
    </svg>
  );
};

export default FavoritesIcon;
