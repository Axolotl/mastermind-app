import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "../components/NameFormButton";
import Wrapper from "../components/FlexWrapper";

const wrapperStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap"
};

let NameForm = props => {
  const { handleSubmit } = props;
  return (
    <form style={wrapperStyle} onSubmit={handleSubmit}>
      <div style={{ margin: "-2px 3px 0 3px" }}>
        <Field
          autoComplete="off"
          name="name"
          component="input"
          type="text"
          style={{ width: "80px", border: "1px solid black", height: "18px" }}
        />
      </div>

      <Button />
    </form>
  );
};

NameForm = reduxForm({
  form: "name"
})(NameForm);

export default NameForm;
