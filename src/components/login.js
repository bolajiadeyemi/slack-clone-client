import React, { Component } from "react";
import { Form, Container } from "semantic-ui-react";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  loginUser = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="username"
              value={this.state.username}
              onChange={this.setUsername}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="password"
              value={this.state.password}
              type="password"
              onChange={this.setPassword}
            />
          </Form.Field>
          <button type="submit" className="ui button" onClick={this.loginUser}>
            Submit
          </button>
        </Form>
      </Container>
    );
  }
}
