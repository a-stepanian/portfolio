import React, { useEffect } from "react";
import styled from "styled-components";
import data from "../data";

const Hero = () => {
  return (
    <Wrapper>
      <div className="box">
        <img src={data[0].thumbnail} alt="" />
      </div>
      <div className="box">
        <img src={data[1].thumbnail} alt="" />
      </div>
      <div className="box">
        <img src={data[2].thumbnail} alt="" />
      </div>
      <div className="box">
        <img src={data[3].thumbnail} alt="" />
      </div>
      <div className="box">
        <img src={data[4].thumbnail} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 7rem);
  margin-top: 7rem;
  position: relative;
  .box {
    position: absolute;
    border: var(--large-border);
    overflow: hidden;
    &:nth-of-type(1) {
      top: 0;
      left: 0;
      height: 30%;
      width: 70%;
    }
    &:nth-of-type(2) {
      bottom: 0;
      left: 0;
      height: 70%;
      width: 30%;
    }
    &:nth-of-type(3) {
      top: 0;
      right: 0;
      height: 70%;
      width: 30%;
    }
    &:nth-of-type(4) {
      bottom: 0;
      right: 0;
      height: 30%;
      width: 70%;
    }
    &:nth-of-type(5) {
      top: 50%;
      left: 50%;
      height: 30%;
      width: 30%;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default Hero;
