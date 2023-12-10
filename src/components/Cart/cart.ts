import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  inset: 0,
});
export const Content = styled(Dialog.Content, {
  backgroundColor: "$gray800",
  borderRadius: 6,
  padding: "48px",

  position: "fixed",
  top: "0",
  right: "0",
  width: "30rem",
  height: "100vh",
});
export const Title = styled(Dialog.Title, {
  marginTop: "4.5rem",
  fontSize: "1.25rem",
  fontWeight: "700",
  color: "$gray100",
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  svg: {
    color: "#8D8D99",
  },
});
export const CartSummary = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  gap: "1.5rem",
});

export const ItemsContainer = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "1.5rem",
});
export const ItemCart = styled("div", {
  display: "flex",

  gap: "1.25rem",

  height: "5.875rem",
});

export const ImageContainer = styled("div", {
  height: "100%",
  borderRadius: "8px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    height: "100%",
  },
});

export const DetailsItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",

  span: {
    color: "$gray300",
    fontSize: "1.125rem",
    display: "block",
  },

  "span.bold": {
    color: "$gray100",
    fontSize: "1.125rem",
    fontWeight: 700,
  },

  button: {
    width: "3rem",
    backgroundColor: "transparent",
    border: "none",
    color: "$green500",
    cursor: "pointer",

    fontWeight: 700,
  },
});

export const ResumeCartDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".1875rem",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "span.light-bold": {
      fontSize: "1.125rem",
      fontWeight: 700,
    },

    "span.strong-bold": {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
  },
  button: {
    width: "100%",
    borderRadius: "8px",
    marginTop: "3.4375rem",
    marginBottom: "7rem",
    padding: "20px 2rem",

    border: "none",
    backgroundColor: "$green500",

    fontSize: "1.125rem",
  },
});
