import styled from "styled-components";
import { BiCheckboxSquare } from "react-icons/bi";

const Job = ({ job }) => {
  const { company, location, stateImg, title, date, description } = job;

  return (
    <Wrapper>
      <header className="job-header">
        <div className="title-company">
          <h3>{title}</h3>
          <a href="https://www.usg.com/" target="_blank" rel="noreferrer">
            <h4>{company}</h4>
          </a>
        </div>
      </header>
      <ul>
        {description.map((jobDuty, index) => {
          return (
            <li key={index}>
              <BiCheckboxSquare className="bullet" />
              {jobDuty}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .job-header {
    height: 6.6rem;
    z-index: 1;
    background: var(--main);
    position: sticky;
    top: 12.9rem;
    padding-right: 6rem;
    border-bottom: 3px solid black;
    .title-company {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h3 {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      line-height: 1rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }

  li {
    list-style-type: none;
    font-size: 0.8rem;
  }
  .bullet {
    font-size: 1rem;
    transform: translateY(0.15rem);
  }
`;

export default Job;
