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

import { X } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "@/context/CardContext";
import { priceFormatter } from "@/utils/formatter";

export function Cart() {
  const { cart, cartItemsTotal, cartQuantity } = useContext(CartContext);
  const formattedTotalPrice = priceFormatter(cartItemsTotal);
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
            {cart.map((cart) => (
              <ItemCart key={cart.id}>
                <ImageContainer className="image">
                  <Image src={cart.imageUrl} alt="" width={94} height={94} />
                </ImageContainer>
                <DetailsItem>
                  <span>{cart.name}</span>
                  <span className="bold">{cart.price}</span>
                  <button>Remover</button>
                </DetailsItem>
              </ItemCart>
            ))}
          </ItemsContainer>

          <ResumeCartDescription>
            <div>
              <span>Quantidade</span>
              <span>{cartQuantity} itens</span>
            </div>
            <div>
              <span className="light-bold">Valor total</span>
              <span className="strong-bold">{formattedTotalPrice}</span>
            </div>

            <button>Finalizar Compra</button>
          </ResumeCartDescription>
        </CartSummary>
      </Content>
    </Dialog.Portal>
  );
}
