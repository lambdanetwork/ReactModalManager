/// <reference path="./modal.d.ts" />

import * as React from "react";
import ModalManager from "./ModalManager";
import Portal from "./Portal";
import * as modalT from "modalT";

class ModalContainer extends React.Component<modalT.IModalContainer> {
  render() {
    return (
      <div id="shpID-lightbox">
        <Portal {...this.props} />
      </div>
    );
  }
}

export { ModalManager };
export { ModalContainer };
