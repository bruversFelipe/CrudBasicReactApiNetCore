import React from "react";
import ConsultaIcon from "../../Icons";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from "axios";

// com o style inline, posso criar um objeto style e dentro dele ter vários outros objetos como se fosse class no css ou .less
const style = {
  zeraButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer"
  },
  icon: { width: "25px" }
};

const ConsultaClienteList = React.lazy(() => import("./ConsultaClienteList"));
const ConsultaForm = React.lazy(() => import("./ConsultaForm"));

/*React Lazy
  O react lazy é uma feature nova do react onde é usada para importar componentes somente no momento em que for realmente utilizado
  Isso em uma produção em grande escala, é muito útil para não sobrecarregar o loading da página ao montar todos os componentes de uma vez só. */

class ConsultarCliente extends React.Component {
  state = {
    showModal: false,
    nomeCliente: "",
    arrayClientes: []
  }; /* exemplo de state sem o uso do constructor e super*/

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  changeInput = e => {
    const nomeCliente = e.target.value;

    this.setState({
      nomeCliente
    });

    if (nomeCliente !== "") {
      axios
        .get(
          `https://localhost:5001/consultas/cliente/${nomeCliente}`
        ) /* assim concatena string com váriavel */
        .then(response => {
          console.log(
            "response",
            response.data
          ); /* verifique o retorno no console*/
          this.setState({
            arrayClientes: response.data /* armazena o array na state */
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  renderModal() {
    const { showModal, nomeCliente, arrayClientes } = this.state;
    return (
      <Modal isOpen={showModal} toggle={this.closeModal}>
        <ModalHeader>Consultar Cliente</ModalHeader>
        <ModalBody>
          <React.Suspense fallback={<div>carregando...</div>}>
            {/*O React.Suspense é usado por conta do react Lazy, ele deve englobar os componentes que foram importados através do lazy, o fallback vc coloca um componente de loading ou um html comum como acima*/}
            <ConsultaForm
              valueInput={nomeCliente}
              changeInput={this.changeInput}
            />
            <br />
            <ConsultaClienteList arrayClientes={arrayClientes} />{" "}
            {/* o arrayClientes é enviado para o componente de lista */}
          </React.Suspense>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.closeModal}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <button style={style.zeraButton} onClick={this.openModal}>
          {/*Englobei o ícone svg em um button, pois acredito que ícones em si não devem ter ação  */}
          <ConsultaIcon style={style.icon} />
          {/*No react também pode ser criado componentes que renderizam icones SVG's dê f12 no ConsultaICon*/}
        </button>
        {showModal && this.renderModal()}
      </React.Fragment>
    );
  }
}

export default ConsultarCliente;
