import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CadastroClienteForm = ({
  /*abaixo suas props*/
  cadastrarForm,
  changeNome,
  changeCPF,
  nomeCliente,
  cpfCliente
}) => (
  <Form>
    <FormGroup>
      <Label for="nomeCliente">Nome Cliente</Label>
      <Input
        type="text"
        name="nomeCliente"
        id="nomeCliente"
        placeholder="Digite o Nome"
        value={nomeCliente} // aqui diz que o valor do input vai ser a prop nomeCliente
        onChange={changeNome} // aqui é a passagem da função
      />
    </FormGroup>
    <FormGroup>
      <Label for="cpfCliente">CPF Cliente</Label>
      <Input
        type="text"
        name="cpfCliente"
        id="cpfCliente"
        placeholder="Digite o CPF"
        value={cpfCliente} // aqui diz que o valor do input vai ser a prop cpfCliente
        onChange={changeCPF} // aqui é a passagem da função
      />
    </FormGroup>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {/* style inline não é nada performático, só um exemplo de como fazer siga o exemplo do CadastroCliente usando objetos */}
      <Button color="primary" onClick={cadastrarForm}>
        Cadastrar
      </Button>
    </div>
  </Form>
);

export default CadastroClienteForm;
