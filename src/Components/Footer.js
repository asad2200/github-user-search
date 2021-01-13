import React from 'react';
import {Container} from "reactstrap";

const Footer = () => {
    return (
        <Container fluid tag={"footer"} className={"text-center bg-info text-white text-uppercase fixed-bottom mt-5 p-2"}>
            GITHUB <strong> user search and display </strong> APP
        </Container>
    );
};

export default Footer;