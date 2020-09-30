import React, { useState } from "react";
import DLayout from "../components/dashboardLayout";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import NavLogo from "../img/navLogoAzul.png";
import DummyImg from "../img/profile-dummy.png";
import { Link } from "react-router-dom";
import upadloadIcon from "../img/uploadIcon.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateInvoice() {
  const [name, setName] = useState(" ");
  (function () {
    fetch("/dashboardbe").then((res) => {
      res.json().then((obj) => {
        console.log(res, obj);
        setName(obj.name);
      });
    });
  })();
  const history = useHistory();

  const [invoice, setInvoice] = useState({
    name: "A",
    invoiceNumber: "2020-001",
    file: null,
    services: null,
    client: null,
    invoiceDate: null,
    totalProvisionServices: 0,
    iva: 0.21,
    irpf: 0,
    total: 0,
    iban: "",
  });

  async function handleInvoice(e) {
    e.preventDefault();
    console.log(invoice.file);
    const formData = new FormData();
    formData.append("estado", "Iniciado");
    formData.append("invoice_date", invoice.invoiceDate);
    formData.append("base_imponible", invoice.totalProvisionServices);
    formData.append("iva", invoice.iva);
    formData.append("irpf", invoice.irpf);
    formData.append("total_invoice", invoice.total);
    formData.append("concepto", invoice.services);
    formData.append("cliente", invoice.client);
    formData.append("file", invoice.file, "Nueva factura");

    axios.post("/invoice", formData);
    history.push("/dashboard");
  }

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
              <small className="ml-2">{name}</small>
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

            <Row id="contactDetails">
              <Col md={12} className="contactDetails py-3 shadow">
                <h3 className="font-weight-bold">Contact Details</h3>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">Name</Form.Label>
                      <Form.Control
                        type="text"
                        // placeholder="Name"
                        onChange={(e) => {
                          setInvoice({ ...invoice, name: e.target.value });
                        }}
                      />
                    </Form.Group>

                    <Form.Group controlId="">
                      <Form.Label>Provision of services</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          setInvoice({
                            ...invoice,
                            services: e.target.value,
                          });
                        }}
                      >
                        <option>Freelance</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">
                        Invoice Number
                      </Form.Label>
                      <Form.Control type="text" readOnly />
                    </Form.Group>

                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">
                        Invoice Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        onChange={(e) => {
                          setInvoice({
                            ...invoice,
                            invoiceDate: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="">
                      <Form.File
                        id="custom-file-translate-html"
                        label="Upload file"
                        data-browse="search"
                        custom
                        onChange={(e) => {
                          setInvoice({ ...invoice, file: e.target.files[0] });
                        }}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-end align-item-center">
                      <Link className="yourTaxesBtn">Edit</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row id="invoiceDetails" className="py-4">
              <Col md={12} className="invoiceDetails py-3 shadow">
                <h3 className="font-weight-bold">Invoice Details</h3>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="">
                      <Form.Label>Client</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          setInvoice({ ...invoice, client: e.target.value });
                        }}
                      >
                        <option value="glovoapp">Glovoapp</option>
                        <option value="ubereats">Uber Eats</option>
                        <option value="deliveroo">Deliveroo</option>
                      </Form.Control>
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="">
                          <Form.Label>I.V.A</Form.Label>
                          <Form.Control
                            as="select"
                            onChange={(e) => {
                              setInvoice({
                                ...invoice,
                                total: (
                                  (Number(e.target.value) + 1) *
                                  invoice.totalProvisionServices
                                ).toFixed(2),
                                iva: e.target.value,
                              });
                            }}
                          >
                            <option value="0.21">21%</option>
                            <option value="0.10">10%</option>
                            <option value="0.04">4%</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="">
                          <Form.Label>I.R.P.F</Form.Label>
                          <Form.Control
                            as="select"
                            onChange={(e) => {
                              setInvoice({
                                ...invoice,
                                irpf: e.target.value,
                              });
                            }}
                          >
                            <option value="0">0%</option>
                            <option value="0.7">7%</option>
                            <option value="20">20%</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">
                        Total provision if services
                      </Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => {
                          console.log(invoice.iva);
                          setInvoice({
                            ...invoice,
                            totalProvisionServices: e.target.value,
                            total:
                              e.target.value *
                              (1 + Number(invoice.iva)).toFixed(2),
                          });
                        }}
                      />
                    </Form.Group>

                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">Total</Form.Label>
                      <Form.Control
                        type="text"
                        className="total"
                        readOnly
                        value={invoice.total}
                        onChange={(e) => {
                          setInvoice({ ...invoice, total: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex justify-content-end align-item-center">
                      <Link className="yourTaxesBtn">Edit</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row id="invoiceDetails" className="py-4">
              <Col md={12} className="invoiceDetails py-3 shadow">
                <h3 className="font-weight-bold">Charge Method</h3>
                <Row>
                  <Col md={9}>
                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">IBAN</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => {
                          setInvoice({ ...invoice, iban: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <div className="d-flex flex-colums justify-content-end align-item-center">
                      <Link className="yourTaxesBtn">Edit</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="py-5">
              <Col md={12}>
                <div className="text-center">
                  <Link className="saveInvoicesBtn" onClick={handleInvoice}>
                    Save Invoice
                  </Link>
                </div>
              </Col>
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
