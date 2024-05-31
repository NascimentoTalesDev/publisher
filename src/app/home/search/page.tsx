"use client"

import { useState } from "react";
import Stores from "./_components/stores";
import Search from "./_components/search";

const SearchPage = () => {
    const [store, setStore] = useState("Minha loja")
    return (
        <div className="w-full">
            <Stores ChosenStore={setStore} chosen={store} />
            <Search store={store} />
        </div>
    );
}
 
export default SearchPage;