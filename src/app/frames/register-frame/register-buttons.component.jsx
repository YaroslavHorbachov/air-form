import React, { Fragment } from "react";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { connect } from "react-redux";
import { REVERSE_BUTTON_GROUP } from "./register.actions";

@connect(state => {
  return { label: state.label };
})
export class ButtonSet extends React.Component {
  state = {
    swappedButtons: false
  };

  handlePrimaryButtonClick = () => {
    // swap buttons
    const { dispatch } = this.props;
    this.setState(state => ({ swappedButtons: !state.swappedButtons }));
    dispatch({ type: REVERSE_BUTTON_GROUP });
  };

  render() {
    const { swappedButtons } = this.state;
    const buttonsSet = [
      <PrimaryButton
        className="ms-sm6 ms-md6 ms-lg6"
        onClick={this.handlePrimaryButtonClick}
      >
        <span>{this.props.label}</span>
      </PrimaryButton>,
      <DefaultButton className="ms-sm6 ms-md6 ms-lg6">
        <span>Sign In</span>
      </DefaultButton>
    ];
    return (
      <Fragment>
        <div>{swappedButtons ? buttonsSet.reverse() : buttonsSet}</div>
        {swappedButtons && (
          <div>
            <p>
              <span className=" ms-slideRightIn10">Reversed</span>
            </p>
          </div>
        )}
      </Fragment>
    );
  }
}
