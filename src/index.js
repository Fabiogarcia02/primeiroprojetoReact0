// Importa o React, necessário para criar componentes
import React from 'react';

// Importa o ReactDOM para renderizar o React na página HTML
import ReactDOM from 'react-dom/client';

// Importa o arquivo de estilos global
import './index.css';

// Importa o componente de rotas que criamos
// Importa o componente de rotas corretamente
import RoutesApp from './routes';


// Cria a raiz da aplicação React, ligando ao elemento com id "root" do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação dentro do root
root.render(
  // StrictMode ajuda a detectar problemas no app durante o desenvolvimento
  <React.StrictMode>
    {/* Chamamos o componente RoutesApp que vai controlar todas as páginas */}
    <RoutesApp />
  </React.StrictMode>
);

// Observação:
// Se quiser medir performance, você pode usar reportWebVitals.
// Exemplo: reportWebVitals(console.log);
