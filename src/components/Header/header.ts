import { styled } from "@/styles";

export const Container = styled("header", {
  position: "relative",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",

  button: {
    position: "relative",
    padding: "0.75rem",
    backgroundColor: "transparent",
    border: "none",
    background: "$gray800",
    borderRadius: "6px",
    cursor: "pointer",

    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.8rem",
      height: "1.8rem",
      position: "absolute",
      right: "-0.6rem",
      top: "-0.6rem",

      backgroundColor: "$green500",
      border: "3px solid $gray900",
      borderRadius: "10000px",

      color: "#ffff",
      fontSize: "0.875rem",
      fontWeight: "bold",
    },
  },
});
