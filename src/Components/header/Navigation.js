import React from "react";
import { Navbar, NavbarBrand} from 'reactstrap'

const Navigation = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">Yellow Restaurant</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navigation;
