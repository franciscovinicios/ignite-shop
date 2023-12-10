import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
});
export const Content = styled(Dialog.Content, {
  backgroundColor: "$gray800",
  borderRadius: 6,

  position: "fixed",
  top: "0",
  right: "0",
  width: "100vw",
  maxWidth: "30rem",
  height: "100vh",
  padding: 25,
});
export const Title = styled(Dialog.Title, {
  marginTop: "4.5rem",
  marginBottom: "2rem",
  fontSize: "1.25rem",
  fontWeight: "700",
  color: "$gray100",
});

export const CartSummary = styled("div", {
  display: "flex",
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
