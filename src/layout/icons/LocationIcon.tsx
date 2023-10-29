import { IconProps } from "./icon-types";

const LocationIcon = ({ styles, size = 25 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      style={styles}
      role="img"
      aria-label="Example of a heart icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title>Location Icon</title>
      <desc>
        After clicking the icon user will be asked to enable his current
        location
      </desc>
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
};

export default LocationIcon;
