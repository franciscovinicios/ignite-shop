import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/context/CardContext";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header>
          <Image src={logoImg.src} alt="" width={130} height={52} />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Handbag weight="bold" size={24} color="#8D8D99" />
                <span>0</span>
              </button>
            </Dialog.Trigger>
            <Cart />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  );
}
