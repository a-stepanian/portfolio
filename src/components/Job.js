import styled from "styled-components";
import { BiCheckboxSquare } from "react-icons/bi";
import { useState } from "react";

const Job = ({ job }) => {
  const { company, location, stateImg, title, date, description } = job;

  return (
    <Wrapper>
      <div className="img-container"></div>
      <div className="front"></div>

      <h3>{title}</h3>
      <h4>{location}</h4>
      <h5>{company}</h5>
      <h6>{date}</h6>
      <ul>
        {description.map((jobDuty) => {
          return (
            <li>
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
  border: 3px solid black;
  -webkit-perspective: 100rem;
  perspective: 30rem;
  .img-container {
  }

  @keyframes spin {
    0% {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(-20deg);
    }
    100% {
      transform: rotateY(0);
    }
  }

  li {
    list-style-type: none;
  }
  .bullet {
    font-size: 1rem;
    transform: translateY(0.15rem);
  }
`;

export default Job;
