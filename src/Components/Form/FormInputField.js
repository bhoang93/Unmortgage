import styled from "styled-components";
import NumberFormat from "react-number-format";

const FormInputField = styled(NumberFormat)`
  background-color: #f7f7f7;
  width: 90%;
  font-size: 3rem;
  border: none;
  border-radius: 2px;
  border-bottom: solid #e2e2e2 2px;
  transition: all 0.3s;

  &:focus {
    background-color: #e5e5e5;
  }
`;

export default FormInputField;
