import React from "react";
import { Input } from "reactstrap";

const ConsultaForm = (
  {
    valueInput,
    changeInput
  }
  /*lembre-se, componentizar mesmo que seja pouco código, esse input pode ser utilizado em outra tela*/
) => <Input type="text" value={valueInput} onChange={changeInput} />;

export default ConsultaForm;
