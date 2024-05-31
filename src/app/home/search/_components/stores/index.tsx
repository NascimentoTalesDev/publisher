"use client"

import TitleH1 from "@/app/home/_components/title-h1";
import { StoresComponent, StoresContainer } from "./components";
import * as React from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/lib/utils";

interface StoresProps {
  chosen: string;
  ChosenStore: (name:string) => void
}

const Stores = ({ chosen, ChosenStore }: StoresProps ) => {
  const stores = [
    "Minha loja",
    "Ali express",
    "Amazon",
    "Americanas",
    "Droga raia",
    "Magazine Luiza",
    "Mercado livre",
    "Riachuello",
    "Shein",
    "Shopee",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
    "Outra loja",
  ];

  return (
    <StoresComponent>
      <StoresContainer>
        <TitleH1>Lojas parceiras</TitleH1>
        <Carousel className="w-full">
          <CarouselContent className="flex mx-1 gap-2">
            {stores?.length > 0 &&
              stores.map((store, index) => (
                <Button
                  key={index}
                  variant={chosen === store ? "default" : "ghost"}
                  onClick={() => ChosenStore(store)}
                  className={"w-fit border-primary"}
                >
                  {store}
                </Button>
              ))}
          </CarouselContent>
        </Carousel>
      </StoresContainer>
    </StoresComponent>
  );
};

export default Stores;
