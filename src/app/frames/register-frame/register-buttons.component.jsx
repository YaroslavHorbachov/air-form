import React from "react";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { connect } from "react-redux";

@connect(state => {
  return { label: state.label };
})
export class ButtonSet extends React.Component {
  state = {
    swappedButtons: false
  };

  handlePrimaryButtonClick = () => {
    // swap buttons
    this.setState(state => ({ swappedButtons: !state.swappedButtons }));
  };

  render() {
    const { swappedButtons } = this.state;
    const buttonsSet = [
      <PrimaryButton onClick={this.handlePrimaryButtonClick}>
        <span>{this.props.label}</span>
      </PrimaryButton>,
      <DefaultButton>
        <span>My another button</span>
      </DefaultButton>
    ];
    return (
      <p>
        <b>{swappedButtons ? buttonsSet.reverse() : buttonsSet}</b>
        {swappedButtons && (
          <p>
            <span className="ms-slideRightIn10 ">Reversed</span>
          </p>
        )}
      </p>
    );
  }
}
