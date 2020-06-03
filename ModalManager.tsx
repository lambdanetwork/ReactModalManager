import * as React from "react";
import * as ReactDOM from "react-dom";
import Modal from "./Modal";
import * as modalT from "modalT";

const ModalManager: modalT.IModalManager = {
  component: null,
  options: null,
  props: {},

  init(ReactComponent: React.Component, props:object) {
    this.component = ReactComponent;
    this.props = props;
  },

  show(body) {
    const modalContainer = document.getElementById("shpID-lightbox");

    if (!modalContainer) {
      throw new Error("Modal Container is not found");
    }
    if (!this.component) {
      throw new Error("Parent Component is not initialized");
    }

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this.component,
      <Modal body={body} {...this.props}/>,
      modalContainer
    );
  },

  close() {
    const elem = document.getElementById("shpID-lightbox");
    if (elem) {
      ReactDOM.unmountComponentAtNode(elem);
    }
  }
};

export default ModalManager;
