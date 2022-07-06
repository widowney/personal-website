/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
    return (
        <Navbar
        fluid={true}
        rounded={true}
        className="z-10 fixed shadow-md "
        >
        <Navbar.Brand href="#">
            <span className="self-center whitespace-nowrap text-xl dark:text-white text-hover-blue font-bold hover:text-slate-800">
            Will Downey
            </span>
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
            Services
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;