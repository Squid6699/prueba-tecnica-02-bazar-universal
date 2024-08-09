import Products from "./components/Products";
import Home from "./components/Home";
import Items from "./components/Item";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";


function App() {
    return(
        <>
            <BrowserRouter>
                <SearchProvider>
                    <CartProvider>
                        <Routes>
                            <Route path="/" element = {<Home/>}/>
                            <Route path="/items" element = {<Products/>}/>
                            <Route path="/items/:id" element = {<Items/>}/>
                            <Route path="/myCart" element = {<Cart/>}/>
                        </Routes>
                    </CartProvider>
                </SearchProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
