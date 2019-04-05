import React from "react";
import CadastroClienteForm from "./CadastroClienteForm";
import { Card, CardTitle } from "reactstrap";
import axios from "axios";
import ModalAlerta from "../../Components/ModalAlerta";
import ConsultarCliente from "../ConsultarCliente";

const styleDiv = {
  margin: "24px",
  padding: "24px"
};

const styleTitle = {
  display: "flex",
  justifyContent: "space-between"
};

// aqui é onde é realizada as funções e onde é manipulado as states. Sendo assim uma Classe
class CadastroCliente extends React.Component {
  constructor() {
    /* o constructor e super são usados para aceitar props de fora, não é necessário o uso deles */
    super();
    this.state = {
      nomeCliente: "",
      cpfCliente: "",
      showModal: false /* controla a visibilidade do modal*/,
      tituloModal: "",
      mensagemModal: ""
      // aqui inicializo os valores zerados
    };

    this.changeCPF = this.changeCPF.bind(this); // o bind pode ser feito tanto assim, como as functions chamadas de 'arrows functions'
  }

  limpaCampos = () => {
    this.setState({
      nomeCliente: "",
      cpfCliente: ""
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  validarForm = (nomeCliente, cpfCliente) => {
    if (nomeCliente === "" || cpfCliente === "") {
      // se os campos estão em brancos entram e chama o modal
      this.setState({
        showModal: true,
        tituloModal: "Atenção!",
        mensagemModal: "Campos não podem estar em brancos."
      });
      return false;
    }
    return true;
  };

  cadastrarForm = () => {
    const { nomeCliente, cpfCliente } = this.state; //recuperando as states salvas até o momento

    if (this.validarForm(nomeCliente, cpfCliente)) {
      // aqui chamo uma função pra validar, se ela é true então entra.
      const dadosCadastro = {
        NM_Cliente: nomeCliente,
        CPF_Cliente: cpfCliente
      }; // objeto montado para ser cadastrado conforme a api está esperando

      // esse é o axios, o axios é o ajax que faz a chamada via url da api, e como o método da api é post
      // eu defino como post e passo um objeto conforme a api espera, o then() é para quando der sucesso na api
      // o catch é a ação que eu quero quando der erro
      axios
        .post("https://localhost:5001/cadastros/cliente", dadosCadastro)
        .then(() => {
          /* aqui deu sucesso então chamo meu modal */
          this.setState(
            {
              showModal: true,
              tituloModal: "Sucesso!",
              mensagemModal: "Cadastro realizado com sucesso."
            },
            () => {
              // essa arrow aqui, chama-se callback, é para garantir que só chamará as próximas funções após setar o showModal acima
              this.limpaCampos();
            }
          );
        })
        .catch(error => {
          console.log("erro", error);
          /* erro onde chamo o modal de erro */
          this.setState(
            {
              showModal: true,
              tituloModal: "Erro!",
              mensagemModal: "Erro ao realizar o Cadastro"
            },
            () => {
              this.limpaCampos();
            }
          );
        });
    }
  };

  /* funções onchange para setar os valores em states */

  changeNome = e => {
    const nomeCliente = e.target.value;

    this.setState({
      nomeCliente
    });
  };

  changeCPF(e) {
    const cpfCliente = e.target.value;

    this.setState({
      cpfCliente
    });
  }

  renderModalAlerta() {
    /* Funções render não precisam de arrow function pois eles retornam um node (html) */
    const { tituloModal, mensagemModal, showModal } = this.state;
    return (
      <ModalAlerta
        tituloModal={tituloModal}
        mensagemModal={mensagemModal}
        showModal={showModal}
        closeModal={this.closeModal}
      /> /* componente desenvolvido para mensagens */
    );
  }

  render() {
    const { nomeCliente, cpfCliente, showModal } = this.state;
    // essa é a maneira de dar o destruction nas states para se trabalhar mais fácil abaixo dela e não usando this.state.nomeCliente em todo lugar
    console.log("nomeCliente", nomeCliente);
    console.log("cpfCliente", cpfCliente); // verifique as states sendo preenchidas ao serem salvas no onChange delas
    return (
      <Card style={styleDiv}>
        <CardTitle style={styleTitle}>
          <strong>Cadastro</strong>
          <ConsultarCliente /> {/* Componente para consultar  */}
        </CardTitle>
        <CadastroClienteForm /* Componente burro onde só possui html e suas props abaixo*/
          cadastrarForm={this.cadastrarForm}
          nomeCliente={nomeCliente}
          cpfCliente={cpfCliente}
          changeNome={this.changeNome}
          changeCPF={this.changeCPF}
        />
        {showModal && this.renderModalAlerta()}
        {/* esse é um if ternário para verificar se show modal existe, se é true ele chama a função render, se não ele não faz nada*/}
      </Card>
    );
  }
}

export default CadastroCliente;
