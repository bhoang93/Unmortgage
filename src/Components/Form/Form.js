import React from "react";
import { connect } from "react-redux";
import { fetchMarkers, setIncome, setSavings } from "../../Actions/formActions";

import FormContainer from "./FormContainer";
import FormHeader from "./FormHeader";
import FormText from "./FormText";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormInputField from "./FormInputField";
import FormInputHeader from "./FormInputHeader";
import FormValidator from "./FormValidator";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeValid: false,
      savingsValid: false,
      formWarning: false
    };
  }

  onChange = e => {
    let value = Number(e.target.value.replace(/[^0-9.-]+/g, ""));

    if (e.target.name === "income") {
      this.props.setIncome(e.target.value);

      if (value >= 20000) {
        this.setState({ incomeValid: true });
      } else {
        this.setState({ incomeValid: false });
      }
    }

    if (e.target.name === "savings") {
      this.props.setSavings(e.target.value);

      if (value >= 10000) {
        this.setState({ savingsValid: true });
      } else {
        this.setState({ savingsValid: false });
      }
    }
  };

  onSubmit = e => {
    if (this.state.incomeValid && this.state.savingsValid) {
      this.props.fetchMarkers();
      this.setState({ formWarning: false });
    } else {
      this.setState({ formWarning: true });
    }
  };

  render() {
    return (
      <FormContainer>
        <FormHeader>Tell us about you</FormHeader>
        <FormText>
          Sharing your household income and savings for a home will help us find
          suitable homes for you.
        </FormText>

        <FormInputHeader>Your household income</FormInputHeader>
        <FormInput>
          <FormInputField
            name="income"
            displayType="input"
            value={this.props.income}
            onChange={this.onChange}
            thousandSeparator={true}
            prefix={"£"}
          />
          <FormValidator
            value={this.props.income}
            valid={this.state.incomeValid}
          />
        </FormInput>

        <FormInputHeader>Your savings</FormInputHeader>
        <FormInput>
          <FormInputField
            name="savings"
            displayType="input"
            value={this.props.savings}
            onChange={this.onChange}
            thousandSeparator={true}
            prefix={"£"}
          />
          <FormValidator
            value={this.props.savings}
            valid={this.state.savingsValid}
          />
        </FormInput>

        {this.state.formWarning && (
          <FormText warning>
            Please ensure all fields are filled correctly and try again.
          </FormText>
        )}

        <FormButton type="submit" onClick={this.onSubmit}>
          Find your next home
        </FormButton>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => ({
  income: state.form.income,
  savings: state.form.savings
});

export default connect(
  mapStateToProps,
  { fetchMarkers, setIncome, setSavings }
)(Form);
