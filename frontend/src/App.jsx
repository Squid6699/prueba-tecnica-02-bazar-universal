import Products from "./components/Products";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/items" element = {<Products/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
