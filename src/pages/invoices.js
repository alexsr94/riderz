import React, { useState, useEffect } from "react";
import DLayout from "../components/dashboardLayout";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import NavLogo from "../img/navLogoAzul.png";
import DummyImg from "../img/profile-dummy.png";
import { Link } from "react-router-dom";
import upadloadIcon from "../img/uploadIcon.png";

export default function Invoices() {
  const [name, setName] = useState(" ");
  (function () {
    fetch("/dashboardbe").then((res) => {
      res.json().then((obj) => {
        console.log(res, obj);
        setName(obj.name);
      });
    });
  })();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = () => {
    /*fetch('riderz.com/invoices')
        .then(response=> response.json())
        .then(res=> setInvoices(res))*/
    return [{ nro: 2, clientName: "Glovoapp 23 S.L" }];
  };

  return (
    <DLayout>
      <Container fluid id="dashboardContainer">
        <Row>
          <Col md={2} id="sidenav" className="shadow ">
            <div className="sidenavHeader p-4 d-flex flex-column justify-content-center align-items-center">
              <Link to="/">
                <img src={NavLogo} className="mb-3 " />
              </Link>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="avatar img-fluid mb-3"
              />
              <small className="ml-2"> {name}</small>
            </div>
            <div className="dashboardNav">
              <Link to="/dashboard">Dashboard</Link>
              <Link>Profile</Link>
              <Link className="azul-oscuro font-weight-bold active">
                Invoices
              </Link>
              <Link>Expenses</Link>
              <Link>Taxes</Link>
            </div>
          </Col>
          <Col md={10} id="dashboardContent" className="py-3 px-5">
            <Row className="mb-4 dashboardTop">
              <Col md={8}>
                <h1>Invoice</h1>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-end align-items-center  mt-3 ml-auto"
              >
                <Link className="accountBtn">Account</Link>
              </Col>
            </Row>

            <Row id="invoicesDetails">
              {invoices.map((invoice) => {
                return (
                  <Col md={12} className=" py-3 shadow mb-3">
                    <h3 className="font-weight-bold invoicesDetailsNumber">
                      Invoice Details / <small>No.{invoice.nro}</small>
                    </h3>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                      <h4>{invoice.clientName}</h4>
                      <h4>Glovo App</h4>
                      <Link className="accountBtn">See</Link>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <section className="dashboardFooter py-5">
              <Container>
                <Row>
                  <Col md={3}></Col>
                  <Col md={2}>
                    <small className="text-center">Responsability Policy</small>
                  </Col>
                  <Col md={2} className="">
                    <small className="text-center">Privacy Policy</small>
                  </Col>
                  <Col md={2}>
                    <small className="text-center">Cookie Policy</small>
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>
      </Container>
    </DLayout>
  );
}
