import React, {useState, useContext, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText, Col
} from "reactstrap";
import {Link} from "react-router-dom";
import {UserContext} from "../Context/UserContext";

const Header = () => {
    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className={"bg-info"} expand={"md"}>
            <NavbarBrand>
                <Link to={"/"} className={"text-white text-decoration-none"}>
                    <strong> GitHub User </strong>
                </Link>
            </NavbarBrand>
            <NavbarText className={"text-white"}>
            {
                context.user?.email ? `Welcome ${context.user.email}` : ""
            }
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className={"ml-auto"}>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink tag={Link} onClick={() => context.setUser(null)} className={"text-white border"}>LogOut</NavLink>
                            </NavItem>
                        ) : (
                            <Fragment>
                                <NavItem>
                                    <NavLink tag={Link} to={"/signup"} className={"text-white border"}>SignUp</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/signin"} className={"text-white border"}>SignIn</NavLink>
                                </NavItem>
                            </Fragment>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;