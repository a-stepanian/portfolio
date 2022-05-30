import React from "react";
import styled from "styled-components";
const IndividualProject = ({ site }) => {
  return (
    <Wrapper>
      {/* <a href={site.url} target="_blank" rel="noreferrer">
        <img src={site.thumbnail} alt="" />
      </a> */}
      <div className="img-container">
        <img src={site.thumbnail} alt={`screenshot of ${site.title} website`} />
      </div>
      <h3>{site.title}</h3>
      <p>
        {site.builtWith.map((tech) => {
          return <span>{tech}</span>;
        })}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  .img-container {
    z-index: 1;
    border: 0.25rem solid var(--black);
    background-color: var(--black);
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Lato", sans-serif;
  }
  p {
    width: 100%;
  }
  span {
    border: 0.1rem solid var(--black);
    margin: 0.2rem;
    padding: 0.2rem;
  }
`;

export default IndividualProject;
