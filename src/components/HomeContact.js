import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeContact = ({ hoveredOver, setHoveredOver }) => {
  const [styling, setStyling] = useState({
    left: "45%",
    width: "40%",
    height: "50%",
  });

  const hovered = () => {
    setHoveredOver("contact");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setStyling({ left: "45%", width: "55%", height: "40%" });
    } else if (hoveredOver === "contact") {
      setStyling({ left: "30%", width: "70%", height: "65%" });
    } else if (hoveredOver === "resume") {
      setStyling({ left: "80%", width: "20%", height: "50%" });
    } else if (hoveredOver === "logo") {
      setStyling({
        borderLeft: "none",
        borderTop: "4px solid var(--black)",
        left: "0",
        width: "30%",
        height: "30%",
      });
    } else {
      setStyling({ left: "40%", width: "60%", height: "50%" });
    }
  }, [hoveredOver]);

  return (
    <Wrapper
      onMouseEnter={hovered}
      style={{
        left: styling.left,
        width: styling.width,
        height: styling.height,
        borderLeft: styling.borderLeft,
        borderTop: styling.borderTop,
      }}
      onMouseLeave={unhovered}
    >
      CONTACT
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 40%;
  background-color: var(--white);
  border-left: 4px solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 3rem;
  transition: 1s;
  &:hover {
    background-color: var(--main-light);
  }
`;

export default HomeContact;
