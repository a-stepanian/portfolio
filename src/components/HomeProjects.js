import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeProjects = ({ hoveredOver, setHoveredOver }) => {
  const [dims, setDims] = useState({});

  const hovered = () => {
    setHoveredOver("projects");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setDims({ width: "90%", height: "60%" });
    } else if (hoveredOver === "contact") {
      setDims({ width: "60%", height: "50%" });
    } else if (hoveredOver === "resume") {
      setDims({ width: "80%", height: "30%" });
    } else if (hoveredOver === "logo") {
      setDims({ width: "20%", height: "70%" });
    } else {
      setDims({ width: "80%", height: "50%" });
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
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-bottom: 4px solid var(--black);
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

export default HomeProjects;
