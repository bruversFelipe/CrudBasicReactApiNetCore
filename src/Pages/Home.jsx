import React from "react";
import Header from "../Containers/Header";
import CadastroCliente from "../Containers/CadastroCliente/CadastroCliente";

const styleMessage = { padding: "24px" }; // o style inline pode ser separado em objetos

const Home = () => (
  <React.Fragment>
    {/* O React.Fragment é uma tag utilizada para englobar lógica, ele não é considerado uma div, ele apenas engloba os componentes e como não é uma div, não quebra css nem aparece nos elements do google */}
    <Header />
    {/*No react é interessante componentizar, separar tudo em pequenos componentes pensanso sempre na manutenção assim como o header acima*/}
    <br />
    <div style={styleMessage}>
      Este é um crud básico, com react puro, onde pode ser feito de melhor forma
      e até mesmo utilizando um melhor framework <br />
      O intuito é mostrar as passagens de props para components e também a
      manipulação de states.
      <br />
      Como também chamada da api através do Axios.
    </div>
    <CadastroCliente />
  </React.Fragment>
);

export default Home;
