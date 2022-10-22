import React from "react";

import { ScrollToAnimation } from "./ScrollToAnimation";

const ScrollToButton = ({ toId, toRef, duration, children }) => {
  const handleClick = () => ScrollToAnimation({ id: toId, ref: toRef, duration });

  return <button onClick={handleClick}>{children}</button>;
};

export default ScrollToButton;
