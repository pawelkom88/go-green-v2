import { IconProps } from "./icon-types";

const UncollapseIcon = ({ styles, size = 25 }: IconProps) => {
  return (
    <svg
      style={styles}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      id="collapse">
      <title>Uncollapse Icon</title>
      <desc>After clicking the icon sidebar will uncollapse</desc>
      <path d="M0 0v8h2V0H0zm7 0v8h1V0H7zM3 2v4l2-2-2-2z"></path>
    </svg>
  );
};

export default UncollapseIcon;
