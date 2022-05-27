import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeLogo = ({ hoveredOver, setHoveredOver }) => {
  const [styling, setStyling] = useState({
    width: "20%",
    height: "20%",
    top: "40%",
    left: "40%",
    border: "none",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
    transform: "translate(-10px, -10px)",
  });

  const hovered = () => {
    setHoveredOver("logo");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setStyling({ top: "50%", left: "50%" });
    } else if (hoveredOver === "about") {
      setStyling({ top: "30%", left: "30%" });
    } else if (hoveredOver === "contact") {
      setStyling({ top: "50%", left: "20%" });
    } else if (hoveredOver === "resume") {
      setStyling({ top: "30%", left: "60%" });
    } else if (hoveredOver === "logo") {
      setStyling({
        top: "30%",
        left: "30%",
        width: "calc(40% + 20px)",
        height: "calc(40% + 20px)",
        border: "5px solid var(--black)",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
        transform: "translate(-10px, -10px)",
      });
    } else {
      setStyling({ width: "20%", height: "20%" });
    }
  }, [hoveredOver]);

  return (
    <Wrapper
      onMouseEnter={hovered}
      style={{
        width: styling.width,
        height: styling.height,
        top: styling.top,
        left: styling.left,
        border: styling.border,
        boxShadow: styling.boxShadow,
        transform: styling.transform,
      }}
      onMouseLeave={unhovered}
    >
      ALEX STEPANIAN <br />
      WEB DEVELOPER
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--main-light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  transition: 0.6s;
  z-index: 1;
  width: 20%;
  height: 20%;
  position: absolute;
  top: 40%;
  left: 40%;
  border: none;
`;

export default HomeLogo;
