import Products from "./components/Products";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Search/>}/>
                    <Route path="/items" element = {<Products/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
