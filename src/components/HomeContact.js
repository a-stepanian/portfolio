import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeContact = ({ hoveredOver, setHoveredOver }) => {
  const [styling, setStyling] = useState({});

  const hovered = () => {
    setHoveredOver("contact");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setStyling({ width: "45%", height: "30%", left: "45%" });
    } else if (hoveredOver === "contact") {
      setStyling({ width: "40%", height: "100%" });
    } else if (hoveredOver === "resume") {
      setStyling({ width: "30%", height: "100%" });
    } else if (hoveredOver === "logo") {
      setStyling({ width: "10%", height: "100%" });
    } else {
      setStyling({ left: "40%", width: "40%", height: "50%" });
    }
  }, [hoveredOver]);

  return (
    <Wrapper
      onMouseEnter={hovered}
      style={{
        width: styling.width,
        height: styling.height,
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 3rem;
  transition: 0.5s;
  &:hover {
    background-color: var(--main-light);
  }
`;

export default HomeContact;
