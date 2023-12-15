import { ReactNode, createContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  price: string;
  priceNumber: number;
  defaultPriceId: string;
}

interface CartContextData {
  cart: Product[];
  cartQuantity: number;
  addProduct: (product: Product) => void;
  removeProductCart: (productId: string) => void;
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

  const removeProductCart = (productId: string) => {
    const updateCart = [...cart];
    const productIndex = updateCart.findIndex((item) => item.id === productId);

    if (productIndex >= 0) {
      updateCart.splice(productIndex, 1);
      setCart(updateCart);
    } else {
      throw Error();
    }
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
        removeProductCart,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
