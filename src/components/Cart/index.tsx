import * as Dialog from "@radix-ui/react-dialog";
import {
  CartSummary,
  Content,
  DetailsItem,
  ImageContainer,
  ItemCart,
  Overlay,
  Title,
} from "./cart";
import Image from "next/image";

import shirt from "@/assets/shirt.svg";

export function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>
        <CartSummary>
          <ItemCart>
            <ImageContainer className="image">
              <Image src={shirt} alt="" />
            </ImageContainer>
            <DetailsItem>
              <span>Camiseta Beyond the Limits</span>
              <span className="bold">R$ 79,90</span>
              <button>Remover</button>
            </DetailsItem>
          </ItemCart>
          <ItemCart>
            <ImageContainer className="image">
              <Image src={shirt} alt="" />
            </ImageContainer>
            <DetailsItem>
              <span>Camiseta Beyond the Limits</span>
              <span className="bold">R$ 79,90</span>
              <button>Remover</button>
            </DetailsItem>
          </ItemCart>
        </CartSummary>
      </Content>
    </Dialog.Portal>
  );
}
