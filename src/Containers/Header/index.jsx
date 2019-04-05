import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const menu = [
  {
    key: 1,
    text: "menu 1"
  },
  {
    key: 2,
    text: "menu 2"
  },
  {
    key: 3,
    text: "menu 3"
  }
];

// O header é um container pois o menu pode vir do banco, se vem do banco consideramos container pois ele mesmo tem sua própria ação de trazer um retorno

const Header = () => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Crud Básico</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/">Teste</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Opções
        </DropdownToggle>
        <DropdownMenu right>
          {menu.map(x => (
            <DropdownItem key={x.key}>{x.text}</DropdownItem> // mapeando o array de menus
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Navbar>
);

export default Header;
