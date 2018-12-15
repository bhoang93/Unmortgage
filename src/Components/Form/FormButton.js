import styled from "styled-components";

const FormButton = styled.div`
  position: absolute;
  bottom: 0rem;
  cursor: pointer;
  transition: all 0.2s ease;

  height: 6rem;
  width: 100%;
  padding: 1rem 2rem;

  background-color: #ff6c58;
  color: #f7f7f7;
  font-size: 2rem;

  display: flex;
  align-items: center;

  &::after {
    content: "→";
    font-size: 3rem;
    transition: all 0.2s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 20%;

    position: absolute;
    right: 0;

    background-color: #ff543c;
  }

  &:hover {
    background-color: #df5040;

    &::after {
      background-color: #ff3e23;
    }
  }
`;

export default FormButton;
