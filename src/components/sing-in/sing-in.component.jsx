import React from "react";
import "./sing-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { singInWithGoogle } from "../../firebase/firebase.utils";
class SingIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    console.log(this.state); //?
  };
  handelChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sing-in">
        <h2>I already have an account.</h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            name="email"
            handleChange={this.handelChange}
            type="email"
            value={this.state.email}
            lable="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handelChange}
            value={this.state.password}
            lable="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sing In</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSingIn>
              Sing In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
