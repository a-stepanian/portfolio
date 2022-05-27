import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeResume = ({ hoveredOver, setHoveredOver }) => {
  const [dims, setDims] = useState({});

  const hovered = () => {
    setHoveredOver("resume");
  };

  const unhovered = () => {
    setHoveredOver("");
  };

  useEffect(() => {
    if (hoveredOver === "projects") {
      setDims({ width: "45%", height: "30%" });
    } else if (hoveredOver === "contact") {
      setDims({ width: "50%", height: "50%" });
    } else if (hoveredOver === "resume") {
      setDims({ width: "60%", height: "70%" });
    } else if (hoveredOver === "logo") {
      setDims({ width: "100%", height: "30%" });
    } else {
      setDims({ width: "40%", height: "50%" });
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
      RESUME
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border-right: 4px solid var(--black);
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 3rem;
  transition: 0.5s;
  width: 40%;
  height: 50%;
  &:hover {
    background-color: var(--main-light);
  }
`;

export default HomeResume;
