import styled from "styled-components";

const School = ({ school }) => {
  const { id, company, location, date, major, minor, course, instructor } =
    school;

  return (
    <Wrapper>
      <header className={`school-header ${id}`}>
        <div className="title-company" target="_blank" rel="noreferrer">
          <h3>{company}</h3>
          {/* <a href={schoolUrl}>
            <img src={logo} alt={`${company} logo`} />
            <h4>{company}</h4>
          </a> */}
        </div>
      </header>
      <p className="major">{major}</p>
      <p className="minor">{minor}</p>
      <ul>
        <li className="duty">{location}</li>
        <li className="duty">{date}</li>
        <li className="duty">{major}</li>
        <li className="duty">{minor}</li>
        <li className="duty">{course}</li>
        <li className="duty">{instructor}</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--black);
  background-color: var(--white-opaque);
  .school-header {
    position: sticky;
    top: 6.95rem;
    height: 6.6rem;
    z-index: 1;
    background: var(--main-muted);
    padding-right: 6.5rem;
    padding-left: 0.3rem;
    border-bottom: var(--small-border);
    .title-company {
      padding: 0.5rem 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    h3 {
      font-family: "Bebas Neue", cursive;
      margin-top: 0.5rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }

    a {
      height: 1.2rem;
      text-decoration: none;
      background-color: var(--black);
      display: flex;
      align-items: center;
      width: fit-content;
      h4 {
        width: fit-content;
        padding: 0.1rem;
        color: var(--white);
        font-size: 0.7rem;
      }
      img {
        width: 2rem;
        margin: 0.2rem 0.2rem;
      }
    }
  }

  .major,
  .minor {
    font-family: "Bebas Neue", cursive;
    padding: 3rem 0.5rem 0;
    font-size: 2.6rem;
    line-height: 2.6rem;
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      padding-bottom: 3rem;
      font-size: 0.8rem;
    }
  }

  /* ------------- */
  /* MEDIA QUERIES */
  /* ------------- */

  @media (min-width: 480px) {
    .school-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 1.9rem;
        line-height: 1.8rem;
      }
    }
    ul {
      .duty {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border: var(--small-border);
    border-right: none;
    .school-header {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
      h3 {
        font-size: 2.4rem;
        line-height: 2rem;
      }
    }

    ul {
      .duty {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 992px) {
    border: var(--small-border);
    .school-header {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default School;
