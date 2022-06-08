import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqknjpzd");
  if (state.succeeded) {
    return <p>Thank you for the email!</p>;
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label for="full-name">NAME</label>
      <input type="text" name="name" id="full-name" required="" />
      <label htmlFor="email">EMAIL</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">MESSAGE</label>
      <textarea id="message" name="message" rows="4" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  border: var(--small-border);
  padding: 2rem;
  margin-bottom: 5rem;
  background-color: var(--white);
  width: 95%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  label,
  button {
    color: var(--black);
    font-family: "Bebas Neue", cursive;
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 500;
  }
  input {
    margin-bottom: 1rem;
  }
  input,
  textarea {
    padding: 0.15rem;
    border: 0.15rem solid var(--black);
    border-radius: none;
    background-color: var(--white);
    &:focus {
      outline: none;
      outline: 0.15rem solid var(--main);
      background-color: var(--main-bg);
    }
  }

  button {
    margin-top: 2rem;
    padding: 0.5rem;
    background-color: var(--main);
    border: var(--small-border);
    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 1px 1px 0 var(--black);
      cursor: pointer;
    }
  }
`;

export default ContactForm;
