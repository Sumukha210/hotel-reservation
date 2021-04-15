import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useRouter } from "next/router";
import CustomBtn from "../CustomBtn";
import { useState } from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const { push } = useRouter();
  const [navOpen, setNavOpen] = useState<Boolean | any>(false);

  const handleCloseNav = () => setNavOpen(false);

  const isAuthenticated = false;

  const handleLogout = () => {
    setNavOpen(false);
  };
  const handleLogin = () => {
    push("/authForm");
    setNavOpen(false);
  };

  return (
    <div className="NavBar">
      <Navbar bg="light" expand="md" expanded={navOpen}>
        <Container>
          <Navbar.Brand onClick={() => push("/")}>perl.</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setNavOpen(navOpen ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLinks handleCloseNav={handleCloseNav} />

              <CustomBtn
                name={isAuthenticated ? "logout" : "login"}
                btnFun={isAuthenticated ? handleLogout : handleLogin}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </div>
  );
};

export default NavBar;
