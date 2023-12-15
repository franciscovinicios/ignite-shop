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
} from "./cartStyles";
import Image from "next/image";

import { Basket, X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CardContext";
import { priceFormatter } from "@/utils/formatter";
import axios from "axios";

export function Cart() {
  const { cart, cartItemsTotal, cartQuantity, removeProductCart } =
    useContext(CartContext);
  const formattedTotalPrice = priceFormatter(cartItemsTotal);

  function handleRemoveProductCart(productId: string) {
    removeProductCart(productId);
  }

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);
      const lineItems = cart.map((item) => ({
        priceId: item.defaultPriceId,
      }));

      const response = await axios.post("/api/checkout", {
        lineItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={28} />
        </CloseButton>
        {cart.length >= 1 ? (
          <>
            <Title>Sacola de compras</Title>
            <CartSummary>
              <ItemsContainer>
                {cart.map((cart) => (
                  <ItemCart key={cart.id}>
                    <ImageContainer className="image">
                      <Image
                        src={cart.imageUrl}
                        alt=""
                        width={94}
                        height={94}
                      />
                    </ImageContainer>
                    <DetailsItem>
                      <span>{cart.name}</span>
                      <span className="bold">{cart.price}</span>
                      <button onClick={() => handleRemoveProductCart(cart.id)}>
                        Remove
                      </button>
                    </DetailsItem>
                  </ItemCart>
                ))}
              </ItemsContainer>

              <ResumeCartDescription>
                <div>
                  <span>Amount</span>
                  {cartQuantity <= 1 ? (
                    <span>{cartQuantity} Item</span>
                  ) : (
                    <span>{cartQuantity} itens</span>
                  )}
                </div>
                <div>
                  <span className="light-bold">Total price</span>
                  <span className="strong-bold">{formattedTotalPrice}</span>
                </div>

                <button onClick={handleBuyButton}>Finalize purchase</button>
              </ResumeCartDescription>
            </CartSummary>
          </>
        ) : (
          <div className="emptyCart">
            <Basket size={70} color="#6858d0" />
            <span>Your shopping cart is empty</span>
          </div>
        )}
      </Content>
    </Dialog.Portal>
  );
}
