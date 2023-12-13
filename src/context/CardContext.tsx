import { ReactNode, createContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface CartContextData {
  cart: Product[];
  cartQuantity: number;
  addProduct: (product: Product) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const cartQuantity = cart?.length;

  const addProduct = (product: Product) => {
    const updateCart = [...cart];

    updateCart.push(product);

    setCart(updateCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
