import styled from "styled-components";
import NumberFormat from "react-number-format";

const FormInputField = styled(NumberFormat)`
  width: 90%;
  font-size: 3rem;
  border: none;
  border-radius: 2px;
  border-bottom: solid #e2e2e2 2px;
  transition: all 0.3s;

  &:focus {
    background-color: #d8d8d8;
  }
`;

export default FormInputField;
