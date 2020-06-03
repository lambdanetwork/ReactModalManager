import * as React from "react";
import { ModalManager } from "./ModalContainer";
import {
  lightboxStyle,
  overlay,
  sectionStyle,
  overlayFull
} from "./ModalStyle";
import * as modalT from "modalT";
import shopeeUserFacing from "../../helper/shopeeUserFacing";

class Modal extends React.Component<modalT.IProp> {
  componentDidMount() {
    shopeeUserFacing.allowRefresh(false);
  }

  componentWillUnmount() {
    shopeeUserFacing.allowRefresh(true);
  }

  trapTouch = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent
  ) => {
    e.stopPropagation();
    e.preventDefault();
  };
  render() {
    return (
      <div
        id="shpID-lightbox-content"
        style={{ ...lightboxStyle, touchAction: "none" }}
      >
        <div style={{ ...overlay, overscrollBehaviorY: "contain" }} />
        <div
          id="spid-lightbox-overlay"
          onClick={this.onClick}
          onTouchMove={this.trapTouch}
          onWheel={this.trapTouch}
          style={{ ...overlayFull, overscrollBehaviorY: "contain" }}
        >
          <div style={sectionStyle}>{this.props.body}</div>
        </div>
      </div>
    );
  }

  onClick = (e: React.MouseEvent) => {
    const { closeable } = this.props;
    e.preventDefault();
    e.stopPropagation();
    if (closeable) {
      const style = document.createElement("style");
      style.id = "modal-opened";
      style.innerHTML = "body { position: relative; }";
      document.body.appendChild(style);
      return ModalManager.close();
    }
  };
}

export default Modal;
