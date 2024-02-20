import MyNavbar from "../components/MyNavbar";
import React, { Component } from "react";
import DetailsPost from "../components/DetailsPost";
import { Container } from "react-bootstrap";



export default function DetailsPage() {
    return (
        <>
        <MyNavbar />
            <Container className="mt-5">
            <DetailsPost />
            </Container>
        </>
    );
}