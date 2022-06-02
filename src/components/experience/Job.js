import styled from "styled-components";
import { BiCheckboxSquare } from "react-icons/bi";

const Job = ({ job }) => {
  const { company, title, description } = job;

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
            <div key={index} className="duty">
              <BiCheckboxSquare className="bullet" />
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
    height: 6.6rem;
    z-index: 1;
    background: var(--main);
    position: sticky;
    top: 12.8rem;
    padding-right: 6rem;
    padding-left: 0.3rem;
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
  .duty {
    display: flex;
    padding: 0.3rem;
  }
  ul {
    padding: 2rem 0;
  }
  li {
    width: 80%;
    list-style-type: none;
    font-size: 0.8rem;
  }
  .bullet {
    width: 15%;
    font-size: 1rem;
    transform: translateY(0.15rem);
  }

  @media (min-width: 768px) {
    .job-header {
      height: 6.6rem;
      z-index: 1;
      background: var(--main);
      position: sticky;
      top: 12.8rem;
      padding-right: 6rem;
      padding-left: 0.3rem;
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
    .duty {
      display: flex;
      padding: 0.3rem;
    }
    ul {
      padding: 2rem 0;
    }
    li {
      width: 80%;
      list-style-type: none;
      font-size: 0.8rem;
    }
    .bullet {
      width: 15%;
      font-size: 1rem;
      transform: translateY(0.15rem);
    }
  }
`;

export default Job;
