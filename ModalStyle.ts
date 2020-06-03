import { CSSProperties } from "react";

export const overlayText: CSSProperties = {
  bottom: 15,
  color: "white",
  left: 30,
  position: "absolute"
};

export const overlayFull: CSSProperties = {
  backgroundColor: "none",
  color: "white",
  height: "100vh",
  left: 0,
  opacity: 1,
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 10000
};

export const overlay: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.37)",
  color: "white",
  height: "100vh",
  left: 0,
  opacity: 0.8,
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 10000
};

export const lightboxStyle: CSSProperties = {
  height: "100vh",
  opacity: 1,
  position: "fixed",
  width: "100%",
  zIndex: 11000
};

export const sectionStyle: CSSProperties = {
  alignItems: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  zIndex: 11000
};

export const closeButton: CSSProperties = {
  backgroundColor: "none",
  color: "white",
  cursor: "pointer",
  fontSize: 50,
  position: "absolute",
  right: 50,
  top: 30
};
export const backgroundOverlay: CSSProperties = {
  backgroundColor: "black",
  height: "150vh",
  opacity: 0.8,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: -1
};
