import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeLogo = ({ hoveredOver, setHoveredOver }) => {
  const [styling, setStyling] = useState({
    width: "10%",
    height: "50%",
    bottom: "0",
    left: "60%",
  });

  const hovered = () => {
    setHoveredOver("logo");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setStyling({ left: "90%", width: "10%" });
    } else if (hoveredOver === "contact") {
      setStyling({ left: "90%", width: "10%" });
    } else if (hoveredOver === "resume") {
      setStyling({ left: "90%", width: "10%" });
    } else if (hoveredOver === "logo") {
      setStyling({
        bottom: "20%",
        left: "20%",
        width: "60%",
        height: "60%",
        border: "5px solid var(--black)",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
        transform: "translate(-10px, -10px)",
      });
    } else {
      setStyling({ width: "20%", height: "100%", bottom: "0", left: "80%" });
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
      logo
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
  transition: 0.5s;
  z-index: 1;
  position: absolute;
  bottom: 0;
  border-left: 4px solid var(--black);
  left: 80%;
  width: 20%;
  height: 100%;
`;

export default HomeLogo;
