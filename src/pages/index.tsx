import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { GetStaticProps } from "next";
import Image from "next/image";

import { styled } from "@/styles";
import { HomeContainer, ProductItem } from "@/styles/pages/home";
import Stripe from "stripe";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import Head from "next/head";
import { Handbag } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "@/context/CardContext";
import { Product } from "@/types/product";

const Button = styled("button", {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
});

interface HomeProps {
  products: Product[];
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addProduct, cart } = useContext(CartContext);

  function handleAddProduct(product: Product) {
    addProduct(product);
  }
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <ProductItem key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button onClick={() => handleAddProduct(product)}>
                  <Handbag weight="bold" size={32} color="#ffffff" />
                </button>
              </footer>
            </ProductItem>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) / 100),
      priceNumber: price.unit_amount,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60, //2 hours
  };
};
