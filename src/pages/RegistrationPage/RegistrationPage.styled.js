import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DeskBack1 from '../../Images/signIn-signUp/back/desktop/back_desktop@1x.png';
import DeskBack2 from '../../Images/signIn-signUp/back/desktop/back_desktop@2x.png';

import TableBack1 from '../../Images/signIn-signUp/back/tablet/back_tablet@1x.png';
import TableBack2 from '../../Images/signIn-signUp/back/tablet/back_tablet@2x.png';

import MobileBack1 from '../../Images/signIn-signUp/back/mobile/back_mobile@1x.png';
import MobileBack2 from '../../Images/signIn-signUp/back/mobile/back_mobile@2x.png';



import MobileBottle1 from '../../Images/signIn-signUp/bottle/mobile/bottle_mobile@1x.png';
import MobileBottle2 from '../../Images/signIn-signUp/bottle/mobile/bottle_mobile@2x.png';

import TabletBottle1 from '../../Images/signIn-signUp/bottle/tablet/bottle_tablet@1x.png';
import TabletBottle2 from '../../Images/signIn-signUp/bottle/tablet/bottle_tablet@2x.png';

import DeskBottle1 from '../../Images/signIn-signUp/bottle/desktop/bottle_desktop@1x.png';
import DeskBottle2 from '../../Images/signIn-signUp/bottle/desktop/bottle_desktop@2x.png';



// кнопка Sign Up
export const Input = styled.input`
  font-family: 'roboto', sans-serif;
  font-weight: var(--medium);
  font-size: 16px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  margin-bottom: 16px;
  width: 100%;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: white;
  ${(props) => (props.disabled ? `cursor: default;` : '')}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }
`;

export const InputFild = styled.input`
  color: ${(props) =>
    props.$errors ? 'var(--red-color)' : 'var(--light-blue-color)'};
  outline: none;
  border: 2px solid var(--light-grey-color);

  border-radius: 6px;
  padding: 12px 10px;
  ${({ $errors }) =>
    $errors ? `border: 1px solid var(--red-color);` : ''}/* margin-top: 8px; */
`;

export const Label = styled.label`
  font-family: 'roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  display: flex;
  gap: 8px;
  flex-direction: column;
  color: var(--primary-txt-color);
  ::placeholder {
    color: ${(props) =>
      props.$errors ? 'var(--red-color)' : 'var(--light-blue-color)'};
  }
  /* position: relative; */
`;

export const FormWrapper = styled.div`
@media screen and (min-width: 768px) {
  position: relative;
}

@media screen and (min-width: 1440px) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;

@media screen and (min-width: 768px) {
  margin-right: auto;
  width: 336px;
  position: absolute;
}

@media screen and (min-width: 1440px) {
  width: 384px;
  padding-top: 113px;
  margin-right: -190px;
}
`;

export const RegisterContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 320px;
  padding-top: 86px;

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'robot', sans-serif;
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;

  color: var(--primary-txt-color);
`;

export const SignInLin = styled(Link)`
  color: var(--primary-color);
  line-height: 20px;
  font-size: 16px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;
`;

export const BottleImg = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 80vh;
  background-position: center bottom;

  @media (max-width: 767px) {
    background-image: image-set(
      url(${MobileBottle1}) 1x,
      url(${MobileBottle2}) 2x
    );
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(
      url(${TabletBottle1}) 1x,
      url(${TabletBottle2}) 2x
    );
    background-position: 80px center;
    width: 736px;
    height: 548px;
  }

 
  @media (min-width: 1440px) {
    background-image: image-set(
      url(${DeskBottle1}) 1x,
      url(${DeskBottle2}) 2x
    );
  }
  margin-top: 0;
  background-position: -65px center;
  width: 916px;
  min-height: 680px;
`;

export const SectionAuth = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 767px) {
    background-image: image-set(
      url(${MobileBack1}) 1x,
      url(${MobileBack2}) 2x
    );
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(
      url(${TableBack1}) 1x,
      url(${TableBack2}) 2x
    );
  }

  @media (min-width: 1024px) {
    background-image: image-set(
      url(${DeskBack1}) 1x,
      url(${DeskBack2}) 2x
    );
  }
`;

export const EyeSvg = styled.svg`
  position: absolute;
  right: 10px;
  top: -40px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  /* background-color: red; */
`;
