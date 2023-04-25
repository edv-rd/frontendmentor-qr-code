import QRCode from "./QRCode";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledContainer>
      <QRCode
        title="Improve your front-end skills by building projects"
        text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </StyledContainer>
  );
}

export default App;
