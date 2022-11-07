import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Opiniao from "./pages/Opiniao";
// import PaginaPadrao from "./components/PaginaPadrao";


function AppRoutes() {
  return (
    <>
    <BrowserRouter>
        <Menu />
      <Routes>      
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="/Opiniao" element={<Opiniao />} />
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRoutes;
