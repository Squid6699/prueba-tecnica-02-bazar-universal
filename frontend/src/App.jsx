import Products from "./components/Products";
import Home from "./components/Home";
import Items from "./components/Item";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { SearchProvider } from "./context/search";

function App() {
    return(
        <>
            <BrowserRouter>
                <SearchProvider>
                    <Routes>
                        <Route path="/" element = {<Home/>}/>
                        <Route path="/items" element = {<Products/>}/>
                        <Route path="/items/:id" element = {<Items/>}/>
                    </Routes>
                </SearchProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
