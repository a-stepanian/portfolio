import styled from "styled-components";

const Job = ({ job }) => {
  const { company, companyUrl, title, description, id, logo } = job;

  return (
    <Wrapper>
      <header className={`job-header ${id}`}>
        <div className="title-company">
          <h3>{title}</h3>
          <a href={companyUrl} target="_blank" rel="noreferrer">
            <img src={logo} alt={`${company} logo`} />
            <h4>{company}</h4>
          </a>
        </div>
      </header>
      <ul>
        {description.map((jobDuty, index) => {
          return (
            <li key={index} className="duty">
              {jobDuty}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  color: var(--black);
  background-color: var(--white-opaque);
  .job-header {
    width: 100%;
    overflow-x: hidden;
    z-index: 1;
    position: sticky;
    top: 6.95rem;
    width: 100%;
    height: 6.6rem;
    background: var(--main-muted);
    padding-right: 7rem;
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
        font-size: 0.6rem;
      }
      img {
        height: 80%;
        margin: 0.1rem 0.2rem;
      }
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      padding-bottom: 3rem;
      font-size: 1rem;
    }
  }

  /* ------------- */
  /* MEDIA QUERIES */
  /* ------------- */

  @media (min-width: 480px) {
    .job-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 1.9rem;
        line-height: 1.8rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border: var(--small-border);
    border-right: none;
    .job-header {
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
    .job-header {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default Job;
