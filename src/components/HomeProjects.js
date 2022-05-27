import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeProjects = ({ hoveredOver, setHoveredOver }) => {
  const [dims, setDims] = useState({ width: "60%", height: "40%" });

  const hovered = () => {
    setHoveredOver("projects");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setDims({ width: "70%", height: "50%" });
    } else if (hoveredOver === "about") {
      setDims({ width: "50%", height: "30%" });
    } else if (hoveredOver === "contact") {
      setDims({ width: "40%", height: "50%" });
    } else if (hoveredOver === "resume") {
      setDims({ width: "80%", height: "30%" });
    } else if (hoveredOver === "logo") {
      setDims({ width: "20%", height: "80%" });
    } else {
      setDims({ width: "60%", height: "40%" });
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
      PROJECTS
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 19%;
  border: 2px solid var(--black);
  border-top: none;
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
    left: 0;
    height: 40%;
    width: 60%;
    border: none;
    border-bottom: 4px solid var(--black);
    transition: 0.5s;
  }
`;

export default HomeProjects;
