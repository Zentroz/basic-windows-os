import React, { useState, useRef } from 'react';
import NavigationButtons from './NavigationButtons';

const NavigationBar = ({ applicationName, parentSessionId }) => {
  const navbarRef = useRef();
  // Drag Window
  const [MouseHover, setMouseHover] = useState(false);
  const [MouseHold, setMouseHold] = useState(false);
  const [Maximized, setMaximized] = useState(false);

  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  // Event Functions
  const MouseDown = (e) => {
    if (e.button == 0) {
      if (e.target.classList[0] == "navigation-button")
        return;
      setMouseHold(true)
    }
  }
  const MouseUp = (e) => {
    if (e.button == 0) {
      setMouseHold(false)
    }
  }
  const MouseOver = (e) => {
    if (e.button == 0) {
      setMouseHover(true)
    }
  }
  const MouseOut = (e) => {
    if (e.button == 0) {
      setMouseHover(false);
      setMouseHold(false);
    }
  }

  window.addEventListener("mousemove", (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  });

  if (MouseHover && MouseHold && !Maximized) {
    const windowElement = document.getElementById(parentSessionId);
    const windowElementRect = windowElement.getBoundingClientRect();
    windowElement.style.top = MousePosition.y - (navbarRef.current.getBoundingClientRect().height / 2) + "px";
    windowElement.style.left = MousePosition.x - (windowElementRect.width / 2) + "px";
  }

  return (
    <div
      className='app-navigation-bar w-full max-h-8 h-[8%] bg-gray-800 pl-2 select-none'
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
      onMouseDown={MouseDown}
      onMouseUp={MouseUp}
      ref={navbarRef}
    >
      <span className='navbar-application-name font-semibold text-lg text-white select-none'>{applicationName}</span>
      <NavigationButtons parentSessionId={parentSessionId} setMaximized={setMaximized} />
    </div >
  )
};

export default NavigationBar;