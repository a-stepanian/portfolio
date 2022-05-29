import React from "react";
import styled from "styled-components";
const IndividualProject = ({ site }) => {
  return (
    <Wrapper>
      <a href={site.url} target="_blank" rel="noreferrer">
        <img src={site.thumbnail} alt="" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  max-width: 30rem;
  a {
    outline: 0.2rem solid blue;
    img {
      display: block;
      max-width: 100%;
      object-fit: cover;
    }
  }
`;

export default IndividualProject;
