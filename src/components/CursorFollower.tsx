import React, { useState, useEffect } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateCursorPosition);

    // Select all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, li, img "
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-25%, -25%)",
      }}>
      {/* Outer circle */}
      <div
        className={`rounded-full opacity-50 transition-all duration-300 ease-out
                    ${isHovering ? "bg-gray-400" : "bg-gray-500"}`}
        style={{
          width: isHovering ? "50px" : "32px",
          height: isHovering ? "50px" : "32px",
          transition: "width 0.3s, height 0.3s, background-color 0.3s",
        }}></div>

      {/* Inner circle */}
      <div
        className="bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          width: isHovering ? "6px" : "10px",
          height: isHovering ? "6px" : "10px",
        }}></div>
    </div>
  );
};

export default CursorFollower;
