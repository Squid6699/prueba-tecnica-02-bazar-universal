import { useContext } from "react";
import { SearchContext } from "../context/search";

export function useSearch(){
    const context = useContext(SearchContext);

    if (context === undefined){
        throw new Error("useContext debe ser usado en un SearchContextProvider");
    }

    return context;
}