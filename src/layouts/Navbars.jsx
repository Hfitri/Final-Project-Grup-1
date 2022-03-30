import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";

function Navbars() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="lightBlue" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <div class="pl-32">
                        <NavbarBrand>
                            <img style={{ width: 60 }} src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                        </NavbarBrand>
                    </div>


                    <NavbarToggler
                        color="white"
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>

                        <div class="pr-96">
                            <NavLink href="#konsultasi" ripple="light">Konsultasi</NavLink>
                        </div>


                        <NavLink href="#about" ripple="light">About Us</NavLink>
                        <NavLink href="#services " ripple="light">Services</NavLink>
                        <NavLink href="#team" ripple="light">Our Team</NavLink>
                        <NavLink href="#news " ripple="light">News</NavLink>
                        <NavLink href="#shop" ripple="light">Cat Shop</NavLink>
                        <NavLink href="#login" ripple="light">Login </NavLink>

                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
export default Navbars;