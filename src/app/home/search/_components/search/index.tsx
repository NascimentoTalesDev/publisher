"use client"

import { SearchComponent, SearchContainer, SearchGrid, SearchGridItem, SearchTitle } from "./components";
import LinksForm from "@/components/home/search/links-form";

interface SearchProps{
    store: string;
}

const Search = ({ store }: SearchProps) => {

    return (
        <SearchComponent>
            <SearchContainer>
                <SearchTitle>Buscar em: <span className="font-bold">{store}</span></SearchTitle>
                <SearchGrid>
                    <SearchGridItem className="col-span-1">
                        <LinksForm store={store} />
                    </SearchGridItem>
                </SearchGrid>
            </SearchContainer>
        </SearchComponent>
    );
}
 
export default Search;