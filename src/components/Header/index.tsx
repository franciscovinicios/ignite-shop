import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { Container } from "./header";
import { Cart } from "../Cart";
import { Handbag } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "@/context/CardContext";
export function Header() {
  const { cartQuantity } = useContext(CartContext);
  return (
    <Container>
      <Image src={logoImg.src} alt="" width={130} height={52} />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <Handbag weight="bold" size={24} color="#8D8D99" />
            <span>{cartQuantity}</span>
          </button>
        </Dialog.Trigger>
        <Cart />
      </Dialog.Root>
    </Container>
  );
}
