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
      setDims({ width: "80%", height: "20%" });
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
  height: 19%;
  border: 2px solid var(--black);
  border-top: none;
  border-bottom: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  @media (min-width: 480px) {
    font-size: 3rem;
    transition: 0.5s;
    &:hover {
      background-color: var(--yellow);
    }
  }
  @media (min-width: 992px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 60%;
    width: 40%;
    border: none;
    border-left: 4px solid var(--black);
  }
`;

export default HomeContact;
