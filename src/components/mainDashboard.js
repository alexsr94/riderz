import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NavLogo from '../img/navLogoAzul.png';
import DummyImg from '../img/profile-dummy.png';
import upadloadIcon from '../img/uploadIcon.png';

export default function mainDashboard() {
    return (
        <div>
             <Row className="mb-4 dashboardTop">
              <Col md={8}>
                <h1>Dashboard</h1>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-end align-items-center  mt-3 ml-auto"
              >
                <Link className="accountBtn">Account</Link>
              </Col>
            </Row>
            <Row className="py-2 dashboardBalance mb-3 shadow">
              <Col md={8}>
                <h2>Balance</h2>
              </Col>
              <Col md={4} className="d-flex">
                <p className=" ml-auto mt-1 pr-5 pt-1 ">0.00€</p>
              </Col>
            </Row>
            <Row>
              <Col md={9} className="dashboardCreateInvoice shadow">
                <div className=" p-3 mt-3 ">
                  <h3>Create Invoice</h3>
                  <p>The simple steps to send your first invoice</p>

                  <p>
                    <span>1</span> Add a customer
                  </p>
                  <p>
                    <span>2</span> describe the work
                  </p>
                  <p>
                    <span>3</span> Send id!
                  </p>
                  <hr></hr>
                  <Link to="/createinvoice" className="accountBtn">Start</Link>
                </div>
                <div className="dashboardCreateInvoice"></div>
              </Col>
              <Col md={3}>
                <h3>Plans</h3>
                <p>File your taxes with our agency.</p>
                <Button>See all the plans</Button>
              </Col>
            </Row>

            <Row id="salesInvoices" className="mt-5 ">
              <div className="d-flex align-items-center title">
                <h3 className="font-weight-bold">Sales Invoices</h3>
                <p>
                  <span>0.0</span> pending invoicing
                </p>
              </div>
              <Col
                md={12}
                className="salesInvoices py-3 d-flex justify-content-between aling-items-center"
              >
                <div className="d-flex justify-content-between aling-items-center">
                  <img src={upadloadIcon} />
                  <p className="ml-4">Upload or create your invoice</p>
                </div>
                <div className="d-flex justify-content-end align-items-center ml-auto">
                  <Link className="salesInvoicesBtn">Add</Link>
                </div>
              </Col>
            </Row>

            <Row id="salesInvoices" className="mt-5 ">
              <div className="d-flex align-items-center title">
                <h3 className="font-weight-bold">Your taxes</h3>
                <p>
                  <span>0.0</span> pending invoicing
                </p>
              </div>
              <Col
                md={12}
                className="salesInvoices py-3 d-flex justify-content-between aling-items-center"
              >
                <div className="d-flex justify-content-between aling-items-center">
                  <img src={upadloadIcon} />
                  <p className="ml-4">
                    Configure the taxes that apply to your activity
                  </p>
                </div>
                <div className="d-flex justify-content-end align-items-center ml-auto">
                  <Link className="yourTaxesBtn">Add</Link>
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
            
        </div>
    )
}
