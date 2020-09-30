import React from "react";
import HomeImg from "../img/home.png";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Accordion,
  Badge,
} from "react-bootstrap";
import Section1Img from "../img/getAccess.jpg";
import fullControlImg from "../img/fullControl.png";
import dashboardImg from "../img/dashboardImg.jpg";
import saveTimeImg from "../img/saveTimeImg.png";
import transparencyImg from "../img/transparencyImg.png";
import taxesDayImg from "../img/taxesdayImg.png";
import { BiCheck } from "react-icons/bi";
import Footer from "../components/footer";
import Layout from "../components/layout";
import PriceTable from "../components/priceTable";
import { Link } from "react-router-dom";

export default function home() {
  (function connect() {
    fetch("http://localhost:7000/connect");
  })();
  return (
    <>
      <Layout>
        <section id="hero" className="">
          <Container fluid>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <h1 className="text-center text-white  mb-3">
                  The online tax advice of a whole community
                </h1>
                <Row>
                  <Col md={{ span: 8, offset: 2 }}>
                    <p className="text-center text-white mb-5 mt-1">
                      We manage your rider activity account or freelancer and we
                      file your taxes
                    </p>

                    <div className="d-flex justify-content-around">
                      <Link to="/signup">
                        <Button
                          variant="primary"
                          type="submit"
                          className="mt-3 rounded-pill"
                          style={{
                            padding: "15px 35px",
                            backgroundColor: "#26a64d",
                            border: "none",
                            display: "block",
                            fontSize: "12px",
                          }}
                        >
                          Process your discharge
                        </Button>
                      </Link>
                      <Link to="/signup">
                        <Button
                          variant="primary"
                          type="submit"
                          className="mt-3 rounded-pill"
                          style={{
                            padding: "15px 35px",
                            backgroundColor: "#26a64d",
                            border: "none",
                            display: "block",
                            fontSize: "12px",
                          }}
                        >
                          Free upload to AEAT
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <PriceTable />

        <section>
          <Container>
            <Row id="getAccess" className=" pb-5">
              <Col md={6}>
                <h3 className="azul-oscuro mb-5 pr-3 text-left">
                  Get access wherever you are
                </h3>
                <p className="pr-3  mb-5 azul-oscuro text-left">
                  <BiCheck className="mr-2" /> Get access to your Area Riderz
                  from any device
                </p>
                <p className="pr-3  mb-4 azul-oscuro text-left">
                  <BiCheck className="mr-2" /> Upload your invoices, control
                  your incomes, chat with a personal advisoner and access a
                  personal dashboard f your activity{" "}
                  <span className="font-weight-bold">you have control!</span>
                </p>
                <button className="btn btn-primary mt-5">Learn more </button>
              </Col>
              <Col md={6} className="getAccessRight">
                <img src={Section1Img} />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5" id="fullControl">
          <Container>
            <Row>
              <Col md={6} id="fullControlLeft">
                <img src={fullControlImg} />
              </Col>
              <Col md={6} id="fullControlRight">
                <h3 className="verde-oscuro mb-5 pr-3 text-left ">
                  Full control over your taxes and payments
                </h3>
                <p className="pr-3  mb-5 azul-oscuro text-left">
                  <BiCheck className="mr-2" /> Avoid possible losses, upload
                  inmediately to the app and forget about those little ticket
                  that get lost.
                </p>
                <p className="pr-3  mb-4 azul-oscuro text-left">
                  <BiCheck className="mr-2" /> You can also upload the invoice
                  and your advisor will be in charge of entering the data to the
                  application
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="presentationTaxes" className="py-5">
          <Container>
            <Row>
              <Col md={6}>
                <h3 className="naranja">Presentation of taxes to the AEAT</h3>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <p>
                  <BiCheck className="mr-2 naranja" /> We generate, prepare and
                  present all the models of your tax activity. We{" "}
                  <span>notify</span> you in the filing period, the total amount
                  you will havethe to pay your taxes in a simple and practical
                  way
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="dashboardImg">
          <Container fluid>
            <Row>
              <Col md={12} className="text-center">
                <img src={dashboardImg} />
              </Col>
            </Row>
          </Container>
        </section>
        <section id="trust" className="py-5">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h3 className="text-center">Why trust in Riderz?</h3>
              </Col>
            </Row>
          </Container>

          <Container className="py-5">
            <Row>
              <Col md={4}>
                <Card border="light" className="shadow">
                  <Card.Body className="text-center">
                    <img className="text-center py-5" src={saveTimeImg} />
                    <Card.Title className="text-center font-weight-bold">
                      Save Time
                    </Card.Title>
                    <Card.Text className="py-5">
                      Make your paperwork so you can invest it in other
                      occupations. Your priorities are ours.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card border="light" className="shadow">
                  <Card.Body className="text-center">
                    <img className="text-center py-5" src={transparencyImg} />
                    <Card.Title className="text-center font-weight-bold">
                      Transparency
                    </Card.Title>
                    <Card.Text className="py-5">
                      Manage your paperwork so you can invest it in other
                      occupations. Your priorities are ours.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card border="light" className="shadow">
                  <Card.Body className="text-center">
                    <img className="text-center py-5" src={taxesDayImg} />
                    <Card.Title className="text-center font-weight-bold">
                      Your taxes a day
                    </Card.Title>
                    <Card.Text className="py-5">
                      Manage your paperwork so you can invest it in other
                      occupations. Your priorities are ours.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="text-center py-5">
              <button className="btn btn-primary">Sign Up free</button>
            </div>
          </Container>
        </section>

        <section id="faq" className="py-5">
          <Container>
            <h3 className="text-center azul-oscuro font-weight-bold py-5">
              FAQ's
            </h3>

            <Row>
              <Col>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <div className="d-flex justify-content-between align-items-center">
                        Can i be a Riderz's client?
                        <span className="myButton">+</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        You can become a client of riderz if you are registered
                        as a self-employed delivery person or if you intend to
                        do so.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <div className="d-flex justify-content-between align-items-center">
                        How much does the service cost?
                        <span className="myButton">+</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        We have a flat rate for our customers of 10 euros per
                        month (12.10 euros incl. VAT). However, there may be
                        exceptional situations where the price could vary.
                        Subscribe to our Newsletter to be aware of possible
                        offers and discounts.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      <div className="d-flex justify-content-between align-items-center">
                        What services are included in the Riderz flat rate?
                        <span className="myButton">+</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Our clients will have the following services:
                        <br />
                        Self-employed registration and census modifications.
                        <br />
                        Official Registry Books: Income, Expenses and Investment
                        Goods. Quarterly (303) and annual (390) VAT model.
                        <br />
                        Quarterly model (130) of personal income tax. Quarterly
                        (111) and annual (190) Income Tax withholding model.
                        <br />
                        Quarterly (115) and annual (180) income tax deduction
                        form (rental of premises).
                        <br /> Annual declaration of operations with third
                        parties (347).
                        <br /> Quarterly or annual declaration of
                        intra-community operations (349).
                        <br /> The Annual Income Tax Return (100) is not
                        included in the flat rate.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      <div className="d-flex justify-content-between align-items-center">
                        What happens if I have a problem or inspection?
                        <span className="myButton">+</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        From our side, you will not have any problem related to
                        the management and preparation of your taxes if you
                        upload your invoices correctly and in good faith. We
                        also have a civil responsibility insurance that protects
                        you at all times against any mistakes we may make when
                        processing your taxes. From the beginning of the service
                        we will assign you a personal advisor, so that you will
                        always be dealing with the same person for any
                        consultation or advice you need. In the event of a
                        request or tax check, your personal advisor will be
                        responsible for preparing and dealing with the matter in
                        question. Translated with www.DeepL.com/Translator (free
                        version)
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      <div className="d-flex justify-content-between align-items-center">
                        I am in another office and they have all my
                        documentation?
                        <span className="myButton">+</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        It's perfectly normal to resist, at first, changing
                        advisors when you've been with one for a while. That's
                        why at Riderz we try to make things easy for you and if
                        you come from another consultancy we give you the first
                        3 months as a gift so that your pockets don't notice the
                        change. Besides, we take care of migrating the
                        documentation, you won't have to do anything.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      <div className="d-flex justify-content-between align-items-center">
                        I want to unsubscribe wherever I need?
                        <span className="myButton">+</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        Hello! It's perfectly normal to resist, at first,
                        changing advisors when you've been with one for a while.
                        That's why at Riderz we try to make things easy for you
                        and if you come from another consultancy we give you the
                        first 3 months as a gift so that your pockets don't
                        notice the change. Besides, we take care of migrating
                        the documentation, you won't have to do anything.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
}
