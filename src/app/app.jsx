import React from "react";
import moment from "moment";
import { Register, ButtonSet } from "./frames/register-frame";

export default class extends React.Component {
  render() {
    return (
      <div className="ms-Grid ms-fontSize-xl">
        <div className="ms-Grid-row ">
          <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
            <p className="ms-font-xxl ms-sm6 ms-md6 ms-lg6">Air Form</p>
            <p className="ms-sm6 ms-md6 ms-lg6">Something starts here</p>
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
            <Register className="ms-bgColor-themePrimary ms-sm8 ms-md8 ms-lg8" />
          </div>
        </div>
        <div className="ms-Grid-row ">
          <ButtonSet />
        </div>
      </div>
    );
  }
}
