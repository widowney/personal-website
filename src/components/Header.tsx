import React from 'react';
import { Navbar } from 'flowbite-react';
import WD from '../images/WD.svg';

const Header: React.FunctionComponent = () => {
    console.log(WD);
    return (
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand href="#">
                <img
                src={WD}
                className="mr-3 h-8 sm:h-12"
                alt="Flowbite Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                href="/navbars"
                active={true}
                >
                Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                Portfolio
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                Resume
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;