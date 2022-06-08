import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact-section-scroll-target" />
      <header>
        <h2>CONTACT</h2>
        <p>3.0</p>
      </header>
      <div className="form-wrapper">
        <h3 className="lets-connect">Let's connect!</h3>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg);
  border-bottom: var(--small-border);
  box-shadow: 1px 10px 8px rgba(0, 0, 0, 0.3);

  header {
    z-index: 3;
    position: sticky;
    top: 5rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    background-color: var(--black);
    color: var(--white);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);

    h2,
    p {
      font-size: 0.7rem;
      font-weight: 500;
    }
  }

  .form-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--black);
  }

  .lets-connect {
    margin: 2.5rem 0;
    font-size: 1.8rem;
  }

  @media (min-width: 480px) {
    header {
      h2,
      p {
        font-size: 0.8rem;
      }
    }
    .lets-connect {
      margin: 4rem 0;
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    header {
      h2,
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default Contact;
