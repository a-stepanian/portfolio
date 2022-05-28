import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeLogo = ({ hoveredOver, setHoveredOver }) => {
  const [styling, setStyling] = useState({
    width: "10%",
    height: "50%",
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
      setStyling({ left: "90%", width: "10%", height: "60%" });
    } else if (hoveredOver === "contact") {
      setStyling({ left: "90%", width: "10%", height: "35%" });
    } else if (hoveredOver === "resume") {
      setStyling({ left: "90%", width: "10%" });
    } else if (hoveredOver === "logo") {
      setStyling({
        left: "30%",
        width: "70%",
        height: "100%",
      });
    } else {
      setStyling({ width: "20%", height: "50%", left: "80%" });
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
        bottom: styling.bottom,
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
  transition: 1s;
  z-index: 1;
  position: absolute;
  top: 0;
  border-left: 4px solid var(--black);
  border-bottom: 4px solid var(--black);
  left: 80%;
  width: 20%;
  height: 50%;
`;

export default HomeLogo;
