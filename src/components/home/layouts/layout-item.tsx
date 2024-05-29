"use client";

import { useLayoutValues } from "@/hooks/useLayoutValues";
import Image from "next/image";
import styled from "styled-components";

const LayoutItem = () => {
  const { values } = useLayoutValues();
  
  const Section = styled.section`
    display: flex;
    font-family: ${values?.font};
    align-items: center;
    flex-direction: column;
    background-color: ${values?.color};
    height: 100%;
    width: 100%;
    overflow: hidden;
    `
const ItemsComponent = styled.div` 
    border-radius: 4px;
    background-color: ${values?.secondColor};
    padding: 10px 5px;
    width: 200px;
    height: fit-content;
    margin: ${values?.top}px auto 0 auto; 
`

const ImageComponent = styled.div`
    position: relative;
    margin: 10px auto;
    height: 150px;
    width: 150px;
  `
const ProductContainer = styled.div` 
    width: 100%;
  `
const ProductName = styled.h2` 
    width: 100%;
    font-size: 11px;
    color: ${values?.textColorProduct};
    font-weight: bold;
`
const OldPriceContainer = styled.div` 
    width: 100%;
    margin-bottom: 4px;
  `
const OldPrice = styled.span` 
    width: 100%;
    text-decoration: line-through;
    font-size: 10px;
    color: ${values?.textColorOldPrice};
    font-weight: bold;
    `
const PriceContainer = styled.div` 
    width: 100%;
    `
const Price = styled.div` 
    width: fit-content;
    background-color: ${values?.thirdColor};
    padding: 5px;
    border-radius: 4px;
    color: ${values?.textColorActualPrice};
    font-weight: bold;
    `
    const PriceR$ = styled.span` 
        font-size: 12px;
        font-weight: bold;
        margin-right: 4px;
        `
    const PriceValue = styled.span` 
        font-size: 16px;
        font-weight: bold;
      `
const LinkContainer = styled.div` 
    width: 100%;
    margin-top: ${values?.secondTop}px;
    background-color: ${values?.secondColor};
    padding: 5px 0;
    `
const Link = styled.span` 
    padding: 5px;
    font-size: 16px;
    color: black;
    font-weight: bold;
  `

  return (
    <Section>
      <ItemsComponent>
        <ImageComponent>
          <Image src={"/images/guarda-roupa.png"} width={150} height={150} alt="Imagem" />
        </ImageComponent>
        <ProductContainer>
            <ProductName>Roupeiro Briz 06 Portas 02 Gavetas BS04-127 Nature/Off White - Henn</ProductName>
        </ProductContainer>
        <OldPriceContainer>
            <OldPrice>R$ 1.500,00</OldPrice>
        </OldPriceContainer>
        <PriceContainer>
            <Price>
              <PriceR$>R$</PriceR$>
              <PriceValue>1.199,00</PriceValue>
              </Price>
        </PriceContainer>
      </ItemsComponent>
      <LinkContainer>
        <Link>Link</Link>
      </LinkContainer>
    </Section>
  );
};

export default LayoutItem;
