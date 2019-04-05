import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalAlerta = ({ tituloModal, mensagemModal, closeModal, showModal }) => (
  <Modal isOpen={showModal} toggle={this.openModal}>
    <ModalHeader>{tituloModal}</ModalHeader> {/*aqui recebe a prop titulo*/}
    <ModalBody>{mensagemModal}</ModalBody> {/*aqui recebe a prop mensagem*/}
    <ModalFooter>
      <Button color="primary" onClick={closeModal}>
        Ok
      </Button>
    </ModalFooter>
  </Modal>
);

export default ModalAlerta;
