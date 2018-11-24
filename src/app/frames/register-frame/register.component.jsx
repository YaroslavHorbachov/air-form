import React from "react";
import moment from "moment";

export class Register extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  render() {
    return (
      <div className="ms-font-su ms-fontColor-teal">
        <span onClick={this.check}>
          {moment().format("hh:mm:ss MMM DD YYYY")}
        </span>
      </div>
    );
  }
}
