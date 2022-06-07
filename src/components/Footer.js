import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="left-box" />
      <p>Designed and Developed by Alex Stepanian 2022</p>
      <div className="right-box" />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  border: var(--small-border);
  height: 10rem;
  background-color: var(--white);

  .left-box {
    height: 100%;
    width: 25rem;
    background-color: var(--main);
    border-right: var(--small-border);
  }
  .right-box {
    height: 100%;
    width: 2rem;
    background-color: var(--main);
    border-left: var(--small-border);
  }

  p {
    width: 100%;
    color: var(--black);
  }
`;

export default Footer;
