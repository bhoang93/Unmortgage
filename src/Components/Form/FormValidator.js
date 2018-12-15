import React from "react";

import FormSVG from "./FormSVG";

import checkmark from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";

const FormValidator = ({ value, valid }) => {
  if (value === "") {
    return <></>;
  }

  return (
    <div>
      {valid ? (
        <FormSVG src={checkmark} alt="Checkmark" />
      ) : (
        <FormSVG src={cross} alt="Cross" />
      )}
    </div>
  );
};

export default FormValidator;
