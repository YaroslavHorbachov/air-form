import React from "react";
import moment from "moment";
import { loadTheme } from "office-ui-fabric-react";
import { Register, ButtonSet } from "./frames/register-frame";

loadTheme({
  palette: {
    themePrimary: "#0078d4",
    themeLighterAlt: "#eff6fc",
    themeLighter: "#deecf9",
    themeLight: "#c7e0f4",
    themeTertiary: "#71afe5",
    themeSecondary: "#2b88d8",
    themeDarkAlt: "#106ebe",
    themeDark: "#005a9e",
    themeDarker: "#004578",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#ffffff"
  }
});

export default class extends React.Component {
  render() {
    return (
      <div className="ms-Grid ms-fontSize-xl">
        <div className="ms-Grid-row ">
          <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
            <h1 className="ms-sm6 ms-md6 ms-lg6">Bundle is Worked</h1>
            <p className="ms-sm6 ms-md6 ms-lg6">This work some here</p>
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
