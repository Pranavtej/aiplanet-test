import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <>
        <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img
                src="assets/AI Planet Logo.png" alt="logo"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
    );
}


export default Header;