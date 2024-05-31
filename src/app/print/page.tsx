"use client";

import { useSearchParams } from "next/navigation";
import styled from "styled-components";

const PrintPage = () => {
  const urlParams = useSearchParams();
  const product = Object.fromEntries(urlParams);

  const Section = styled.section`
    display: flex;
    font-family: "sans";
    align-items: center;
    flex-direction: column;
    background-color: #e7eb0f;
    height: 1920px;
    width: 1080px;
    overflow: hidden;
  `;
  const ItemsComponent = styled.div`
    border-radius: 4px;
    background-color: white;
    padding: 2rem;
    width: 85%;
    height: fit-content;
    border-radius: 2rem;
    margin: 100px auto 0 auto;
  `;

  const ImageComponent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin: 50px auto;
  `;
  const ProductContainer = styled.div`
    width: 100%;
  `;
  const ProductName = styled.h2`
    width: 100%;
    font-size: 3.5rem;
    color: black;
    font-weight: bold;
  `;
  const OldPriceContainer = styled.div`
    width: 100%;
    margin-bottom: 4px;
  `;
  const OldPrice = styled.span`
    width: 100%;
    text-decoration: line-through;
    font-size: 2.5rem;
    color: black;
    font-weight: bold;
  `;
  const PriceContainer = styled.div`
    width: 100%;
  `;
  const Price = styled.div`
    width: fit-content;
    background-color: black;
    padding: 5px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
  `;
  const PriceR$ = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-right: 4px;
  `;
  const PriceValue = styled.span`
    font-size: 4rem;
    font-weight: bold;
  `;
  const LinkContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
    background-color: white;
    padding: 3rem 1rem;
  `;
  const Link = styled.span`
    font-size: 3rem;
    color: black;
    font-weight: bold;
  `;

  return (
    <div className="w-full h-full">
      <Section>
        <ItemsComponent>
          <ImageComponent>
            <img src={product?.image} width={800} height={800} alt="Imagem" />
          </ImageComponent>
          <ProductContainer>
            <ProductName>
              {product?.name}
            </ProductName>
          </ProductContainer>
          <OldPriceContainer>
            <OldPrice>{product?.oldPrice}</OldPrice>
          </OldPriceContainer>
          <PriceContainer>
            <Price>
              <PriceR$>R$</PriceR$>
              <PriceValue>{product?.price}</PriceValue>
            </Price>
          </PriceContainer>
        </ItemsComponent>
        <LinkContainer>
          <Link>Link</Link>
        </LinkContainer>
      </Section>
    </div>
  );
};

export default PrintPage;
