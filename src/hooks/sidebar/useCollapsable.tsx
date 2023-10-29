import React from "react";

const useCollapsable = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return {
    isCollapsed,
    setIsCollapsed,
  };
};

export default useCollapsable;
