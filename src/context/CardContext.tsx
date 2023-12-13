import { ReactNode, createContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  priceNumber: number;
}

interface CartContextData {
  cart: Product[];
  cartQuantity: number;
  addProduct: (product: Product) => void;
  cartItemsTotal: number;
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

  const cartItemsTotal = cart.reduce((total, product) => {
    return total + product.priceNumber;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        addProduct,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
