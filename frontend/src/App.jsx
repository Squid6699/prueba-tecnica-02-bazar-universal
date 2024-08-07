import Products from "./components/Products";
import Home from "./components/Home";
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
                    </Routes>
                </SearchProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
