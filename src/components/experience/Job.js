import styled from "styled-components";

const Job = ({ job }) => {
  const { company, title, description, id } = job;

  return (
    <Wrapper>
      <header className={`job-header ${id}`}>
        <div className="title-company">
          <h3>{title}</h3>
          <a href="https://www.usg.com/" target="_blank" rel="noreferrer">
            <img src="usglogobw.bmp" alt="United States Gypsum Company Logo" />
            <h4>{company}</h4>
          </a>
        </div>
      </header>
      <ul>
        {description.map((jobDuty, index) => {
          return (
            <div key={index} className="duty">
              <li>{jobDuty}</li>
            </div>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .job-header {
    position: sticky;
    top: 7rem;
    height: 6.6rem;
    z-index: 1;
    background: var(--main);
    padding-right: 6.5rem;
    padding-left: 0.3rem;
    border-bottom: 3px solid black;
    .title-company {
      padding: 0.5rem 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    h3 {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      line-height: 1rem;
    }

    a {
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

  ul {
    padding: 2rem 0;
    .duty {
      padding: 1rem;
      display: flex;
      li {
        margin-left: 0.5rem;
        list-style-type: square;
        font-size: 0.8rem;
      }
    }
  }
`;

export default Job;
