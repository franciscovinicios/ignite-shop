import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "@/assets/lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import shirt1 from "@/assets/shirts/1.png";
import shirt2 from "@/assets/shirts/2.png";
import shirt3 from "@/assets/shirts/3.png";
import Stripe from "stripe";

const Button = styled("button", {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
});

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount as number) / 100,
    };
  });

  return {
    props: {
      products,
    },
  };
};
