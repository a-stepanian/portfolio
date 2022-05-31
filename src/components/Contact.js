import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact-section-scroll-target" />
      <header>
        <h2>CONTACT</h2>
        <p>3.0</p>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 70rem;
  header {
    z-index: 1;
    position: sticky;
    top: 5rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    background-color: var(--black);
    color: var(--white);
    h2,
    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export default Contact;
