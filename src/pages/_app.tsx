import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={130} height={52} />
        <button>
          <Handbag weight="bold" size={24} color="#8D8D99" />
          <span>0</span>
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
