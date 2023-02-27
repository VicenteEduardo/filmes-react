
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Erro from "./pages/error";
import Favorito from "./pages/Favorito";
function RouteApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos/" element={<Favorito />} />
           <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteApp;