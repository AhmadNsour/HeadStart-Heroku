import { Component } from "react";
import axios from "axios";

export default class LoginPage extends Component {
  componentDidMount() {
    let id = this.props.loggedInUser._id;
    axios
      .put(`https://headstartapp.herokuapp.com/logout/${id}`)
      .then(res => this.props.getLoggedInUser());
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}
