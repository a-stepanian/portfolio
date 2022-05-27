import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeContact = ({ hoveredOver, setHoveredOver }) => {
  const [dims, setDims] = useState({ width: "60%", height: "40%" });

  const hovered = () => {
    setHoveredOver("contact");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "about") {
      setDims({ width: "50%", height: "50%" });
    } else if (hoveredOver === "projects") {
      setDims({ width: "30%", height: "70%" });
    } else if (hoveredOver === "contact") {
      setDims({ width: "60%", height: "70%" });
    } else if (hoveredOver === "resume") {
      setDims({ width: "20%", height: "50%" });
    } else if (hoveredOver === "logo") {
      setDims({ width: "70%", height: "30%" });
    } else {
      setDims({ width: "40%", height: "60%" });
    }
  }, [hoveredOver]);

  return (
    <Wrapper
      onMouseEnter={hovered}
      style={{
        width: dims.width,
        height: dims.height,
      }}
      onMouseLeave={unhovered}
    >
      CONTACT
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-left: 4px solid var(--black);
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
