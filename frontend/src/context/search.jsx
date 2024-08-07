import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();

export function SearchProvider({children}){

    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    const handleSubmitSearch = async (e) =>{
        e.preventDefault();

        if (!search){
            return;
        }
        navigate(`/items?search=${encodeURIComponent(search)}`);
    }

    return(
        <SearchContext.Provider value={{
            handleSubmitSearch,
            setSearch,
            search,
        }}>{children}</SearchContext.Provider>
    );
}