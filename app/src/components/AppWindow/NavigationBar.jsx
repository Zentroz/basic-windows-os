import React, { useState, useEffect, useRef } from 'react';

const NavigationBar = ({ parentSessionId }) => {
  const navbarRef = useRef();
  // Drag Window
  const [MouseHover, setMouseHover] = useState(false);
  const [MouseHold, setMouseHold] = useState(false);

  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  window.addEventListener("mousemove", (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  });

  if (MouseHover && MouseHold) {
    const windowElement = document.getElementById(parentSessionId);
    const windowElementRect = windowElement.getBoundingClientRect();
    windowElement.style.top = MousePosition.y - (navbarRef.current.getBoundingClientRect().height / 2) + "px";
    windowElement.style.left = MousePosition.x - (windowElementRect.width / 2) + "px";
  }

  return (
    <div
      className='app-navigation-bar w-full h-[8%] bg-gray-800'
      onMouseOver={() => setMouseHover(true)}
      onMouseOut={() => { setMouseHover(false); setMouseHold(false); }}
      onMouseDown={() => setMouseHold(true)}
      onMouseUp={() => setMouseHold(false)}
      ref={navbarRef}
    >

    </div>
  )
};

export default NavigationBar;