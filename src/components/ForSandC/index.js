import React from 'react';
import containers from '../../images/Ccontainers.jpg';
import Hcontainers from '../../images/Hcontainers.jpg';

import './style.css';
import {
  WWOCArd,
  ImageContainer,
  ImageContainers,
  SandCcontainer,
  WWOCardContent,
  WWOCCHeading,
  WWOCCParagraph,
  CardListRow,
  LinkRo,
  NavLink,
} from './SolutionElement';
import Fade from 'react-reveal/Fade';
import { CardContainer } from '../Solution/SolutionElement';
const ForSandC = ({ isOpen, toggle }) => {
  return (
    <WWOCArd>
      <ImageContainers>
        <ImageContainer>
          <img src={containers} alt=""></img>
        </ImageContainer>
        <ImageContainer>
          <img src={Hcontainers} alt=""></img>
        </ImageContainer>
      </ImageContainers>

      <SandCcontainer>
        <div class="whole">
          <div class="container">
            <h4>For Shippers</h4>
            <p>
              Get access to capacity and equipment solutions, regardless of
              market conditions.
            </p>
            {/* <a href="/Contact">
              <button class="btn" id="m4">
                <span class="btn-text">Happy to have you</span>
              </button>
            </a>

            <button class="btn">
              <span class="btn-text">
                Sign up for <br></br> kalpartz
              </span>
            </button> */}
          </div>
          <div class="vl"></div>
          <div class="container">
            <h4>For Carriers</h4>
            <p>
              Instantly book your preferred loads and consistent lanes to keep
              your fleet hauling.
            </p>
            {/* <button class="btn2" id="m4">
              <span class="btn-text">Login</span>
            </button>
            <button class="btn2">
              <span class="btn-text">Sign up</span>
            </button> */}
          </div>
        </div>
      </SandCcontainer>
    </WWOCArd>
  );
};

export default ForSandC;
