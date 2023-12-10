import * as Dialog from "@radix-ui/react-dialog";
import {
  CartSummary,
  CloseButton,
  Content,
  DetailsItem,
  ImageContainer,
  ItemCart,
  ItemsContainer,
  Overlay,
  ResumeCartDescription,
  Title,
} from "./cart";
import Image from "next/image";

import shirt from "@/assets/shirt.svg";
import { X } from "@phosphor-icons/react";

export function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X size={28} />
        </CloseButton>
        <CartSummary>
          <ItemsContainer>
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
          </ItemsContainer>

          <ResumeCartDescription>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>
            <div>
              <span className="light-bold">Valor total</span>
              <span className="strong-bold">R$ 270,00</span>
            </div>

            <button>Finalizar Compra</button>
          </ResumeCartDescription>
        </CartSummary>
      </Content>
    </Dialog.Portal>
  );
}
