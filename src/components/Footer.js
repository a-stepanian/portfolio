import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Designed and Developed by <br />
        <span>Alex Stepanian &copy; 2024</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 100%;
    color: var(--black);
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 1px 5px 2px rgba(0, 0, 0, 0.15);
    span {
      font-size: 1.4rem;
      white-space: nowrap;
      font-weight: 900;
    }
  }

  @media (min-width: 480px) {
    p {
      font-size: 2rem;
      span {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 2.4rem;
      span {
        font-size: 2.4rem;
      }
    }
  }
`;

export default Footer;
