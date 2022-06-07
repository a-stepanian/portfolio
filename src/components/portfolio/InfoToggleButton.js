import styled from "styled-components";

const InfoToggleButton = ({ isInfoOpen }) => {
  return (
    <Wrapper
      type="button"
      aria-label={`${
        isInfoOpen
          ? "Hide project information and links to website and github"
          : "Show project information and links to website and github"
      }`}
    >
      <div
        className={`${
          isInfoOpen ? "line vertical vertical-open" : "line vertical"
        }`}
      />
      <div
        className={`${
          isInfoOpen ? "line horizontal horizontal-open" : "line horizontal"
        }`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: transparent;

  .line {
    position: absolute;
    right: 0.65rem;
    width: 1.5rem;
    height: 0.2rem;
    background-color: var(--black);
    transition: 0.5s;
  }

  .vertical {
    top: 1.4rem;
    transform: rotate(90deg);
  }
  .vertical-open {
    transform: rotate(270deg);
    width: 0;
    right: 1.4rem;
  }

  .horizontal {
    top: 1.4rem;
  }
  .horizontal-open {
    transform: rotate(180deg);
  }

  @media (min-width: 480px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default InfoToggleButton;
