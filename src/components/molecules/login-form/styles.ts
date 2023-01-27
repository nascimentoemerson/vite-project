import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  height: 600px;
  background: ${(props) => props.theme.lightTheme.fg};
  h2 {
    font-size: 3rem;
    padding: 1.5rem;
  }
`;

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  input {
    display: flex;
    width: 100%;
    padding: 3px 5px;
    margin: 5px;
    border-radius: 4px;
    border: ${(props) => (props.error ? "solid 2px red" : "none")};
    height: 35px;
    background: ${(props) => props.theme.darkTheme.fg};
    font-size: 1.0rem;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 5px;
    border-radius: 5px;
    border: none;
    align-items: center;
    input {
      display: flex;
      width: 100%;
      border-radius: 5px 0 0 5px;
      border-right: none;
      padding: 3px 5px;
      margin: 0;
      height: 35px;
    }
    button {
      display: flex;
      align-items: center;
      border: ${(props) => (props.error ? "solid 2px red" : "none")};\
      border-left: none;
      padding: 0 5px;
      margin: 0;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      height: 35px;
      background: ${(props) => props.theme.darkTheme.fg};
    }
  }

  
  
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
  border: none;
  background-color: ${(props) => props.theme.darkTheme.fg};
  cursor: pointer;
  height: 35px;
  width: 100px;
  font-size: 1rem
`;

export const StyledButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
  border: none;
  background-color: ${(props) => props.theme.darkTheme.fg};
  cursor: pointer;
  height: 35px;
  width: 100px;
  font-size: 1.2rem
`;


