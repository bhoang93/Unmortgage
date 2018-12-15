import styled from "styled-components";

const FormText = styled.p`
  color: ${props => (props.warning ? "red" : "#aeaeae")};
  font-size: 1.4rem;
`;

export default FormText;
