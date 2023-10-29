import { IconProps } from "./icon-types";

const CollapseIcon = ({ styles, size = 25 }: IconProps) => {
  return (
    <svg
      style={styles}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      id="collapse">
      <title>Collapse Icon</title>
      <desc>After clicking the icon sidebar will collapse</desc>
      <path d="M0 0v8h1V0H0zm6 0v8h2V0H6zM5 2L3 4l2 2V2z"></path>
    </svg>
  );
};

export default CollapseIcon;
