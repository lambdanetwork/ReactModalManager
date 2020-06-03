import * as React from "react";
import * as ReactDOM from "react-dom";
import { ModalManager } from "./ModalContainer";

export default class Portal extends React.Component {
  constructor(props: any) {
    super(props);
    ModalManager.init(this as any, { ...props });
  }

  componentWillUnmount() {
    const elem = document.getElementById("shpID-lightbox");
    if (elem) {
      ReactDOM.unmountComponentAtNode(elem);
    }
  }

  render() {
    return null;
  }
}
