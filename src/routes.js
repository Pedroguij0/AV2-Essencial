import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componentes/Footer";

function AppRoutes(){
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Footer/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default AppRoutes