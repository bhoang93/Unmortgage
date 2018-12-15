import styled from "styled-components";

const FormContainer = styled.form`
  position: fixed;
  bottom: 25%;
  left: 3%;
  z-index: 99999;

  height: 50rem;
  width: 35rem;
  overflow: hidden;

  background-color: #f7f7f7;
  border-radius: 0.3rem;
  padding: 3rem 3rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default FormContainer;
