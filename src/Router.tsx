import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Politica } from './pages/Politica';
import { MaisConsultas } from "./pages/MaisConsultas";

export function Router() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/maisconsultas/" element={<MaisConsultas />} />
                <Route path="/politica/" element={<Politica />} />            
            </Routes>
    )
}