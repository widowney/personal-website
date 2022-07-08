import React from 'react';
import { Navbar } from 'flowbite-react';
import WD from '../images/WD.svg';

const Header: React.FunctionComponent = () => {
    console.log(WD);
    return (
        <div className="fixed w-full z-10">
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
                    <Navbar.Link href="#About">
                    About
                    </Navbar.Link>
                    <Navbar.Link href=".Portfolio">
                    Portfolio
                    </Navbar.Link>
                    <Navbar.Link href="#Resume">
                    Resume
                    </Navbar.Link>
                    <Navbar.Link href=".Contact">
                    Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}

export default Header;