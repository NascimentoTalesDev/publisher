"use client"

import { SearchComponent, SearchContainer, SearchGrid, SearchGridItem, SearchTitle } from "./components";
import LinksForm from "@/components/home/search/links-form";

interface SearchProps{
    store: string;
}

const Search = ({ store }: SearchProps) => {
    let layout = {
        "id": "665686ce7f19c752d66641e9",
        "name": "Layout 3",
        "color": "#00db12",
        "secondColor": "#FFFFFF",
        "thirdColor": "#000",
        "font": "monospace",
        "top": "30",
        "secondTop": "20",
        "textColorProduct": "#000",
        "textColorOldPrice": "#000",
        "textColorActualPrice": "#FFFFFF",
        "textColorLink": "#000",
        "userId": "6656571b46b449f1f5f5dc44",
        "actualLayout": true
    }

    return (
        <SearchComponent>
            <SearchContainer>
                <SearchTitle>Buscar em: <span className="font-bold">{store}</span></SearchTitle>
                <SearchGrid>
                    <SearchGridItem className="col-span-1">
                        <LinksForm store={store} layout={layout} />
                    </SearchGridItem>
                </SearchGrid>
            </SearchContainer>
        </SearchComponent>
    );
}
 
export default Search;