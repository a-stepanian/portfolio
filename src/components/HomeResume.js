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
      setDims({ width: "45%", height: "40%" });
    } else if (hoveredOver === "contact") {
      setDims({ width: "30%", height: "65%" });
    } else if (hoveredOver === "resume") {
      setDims({ width: "80%", height: "70%" });
    } else if (hoveredOver === "logo") {
      setDims({ bottom: "30%", width: "30%", height: "30%" });
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
        bottom: dims.bottom,
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
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 3rem;
  transition: 1s;
  width: 40%;
  height: 50%;
  &:hover {
    background-color: var(--main-light);
  }
`;

export default HomeResume;
