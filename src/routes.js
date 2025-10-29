// Importa os componentes do react-router-dom necessários para criar rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa as páginas que serão usadas nas rotas
import Home from './pages/Home';   // componente Home
import Sobre from './pages/Sobre';  // componente Sobre


// Componente principal que define todas as rotas da aplicação
function RoutesApp() {
  return (
    // BrowserRouter é o "container" das rotas, necessário para habilitar o roteamento
    <BrowserRouter>
      
      {/* Routes agrupa todas as rotas do aplicativo */}
      <Routes>

        {/* Route define uma rota específica
            path="/" → caminho da URL
            element={<Home />} → componente que será renderizado */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página Sobre */}
        <Route path="/sobre" element={<Sobre />} />

      </Routes>
    </BrowserRouter>
  );
}

// Exporta o componente RoutesApp para ser usado em outros arquivos
export default RoutesApp;
