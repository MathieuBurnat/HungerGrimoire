import React from 'react';
import styled from 'styled-components';

const DropDownNavBtn = ({ isOpen }) => {
  return (
    <StyledWrapper>
      <div className={`burger ${isOpen ? "open" : ""}`}>
        <span />
        <span />
        <span />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    cursor: pointer;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    transition: 0.5s ease-in-out;
    left: 0;
  }

  .burger span:nth-of-type(1) {
    top: 0;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform: translateY(-100%);
    transform-origin: left center;
  }

  .burger.open span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger.open span:nth-of-type(2) {
    opacity: 0;
  }

  .burger.open span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;


export default DropDownNavBtn;