import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const style = {
  row: {
    display: "flex",
    justifyContent: "space-between"
  },
  col: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
};

const ConsultaClienteList = ({ arrayClientes }) => (
  <ListGroup>
    {arrayClientes.map(x => (
      <ListGroupItem key={`${x.CPF_Cliente}-${x.NM_Cliente}`}>
        {" "}
        {/*key sempre tem q ser identity, se não ocorrerá warning no console*/}
        <div style={style.row}>
          <div style={style.col}>
            <strong>Nome do cliente</strong>
            {x.NM_Cliente}
          </div>
          <div style={style.col}>
            <strong>Cpf do cliente</strong>
            {x.CPF_Cliente}
          </div>
        </div>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default ConsultaClienteList;
