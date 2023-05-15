import React, { useState } from "react";
import './ScrollupButton.css'
import {ArrowUpOutlined }from '@ant-design/icons'

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    setIsVisible(scrollTop > windowHeight);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-up-button" onClick={handleClick}>
          <ArrowUpOutlined className="up-icon"/>
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;