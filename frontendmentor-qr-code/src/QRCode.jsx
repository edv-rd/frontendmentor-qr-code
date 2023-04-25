/* eslint-disable react/prop-types */

import styled from "styled-components";
import QRCodeImage from "./assets/image-qr-code.png";

const StyledContainer = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  width: 325px;

  h1 {
    color: var(--dark-blue);
    font-weight: 700;
  }

  p {
    color: var(--grayish-blue);
    font-weight: 400;
    font-size: 15px;
  }
`;

const StyledImage = styled.img`
  margin: 15px 15px 0 15px;
  width: 290px;
  height: 290px;
  border-radius: 15px;
  overflow: hidden;
`;

const QRCode = ({ title, text }) => {
  return (
    <StyledContainer>
      <StyledImage src={QRCodeImage} />
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledContainer>
  );
};

export default QRCode;
