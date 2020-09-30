import React, { useState } from "react";
import Riderz from "../img/riderz.png";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../components/layout";
import { FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [registro, setRegistro] = useState({
    loginEmail: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    termsConditions: false,
    newsletter: false,
  });

  async function handleRegistro(e) {
    e.preventDefault();
    const fetchData = await fetch("/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...registro }),
    });
    const response = fetchData;

    if (!response.ok) {
      return history.push("/problem");
    } else {
      history.push("/successLogin");
    }
  }

  return (
    <>
      <Layout>
        <Container id="signupHeader" fluid>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className="signupTopTitle">
              <h1 className="font-bold verde-claro text-center">
                Let's Start!
              </h1>
              <p className="text-center text-white">
                First of all, we need your information.
              </p>
            </Col>
          </Row>
          <Container id="signupForm" className="pb-5">
            <Row>
              <Col md={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }}>
                <Form className="">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="azul-claro">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={registro.email}
                      onChange={(e) => {
                        setRegistro({
                          ...registro,
                          loginEmail: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="azul-claro">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      value={registro.firstName}
                      onChange={(e) => {
                        setRegistro({ ...registro, firstName: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="azul-claro">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      value={registro.lastName}
                      onChange={(e) => {
                        setRegistro({ ...registro, lastName: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label className="azul-claro">Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      value={registro.phones}
                      onChange={(e) => {
                        setRegistro({ ...registro, phones: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Link to="/resetPassword" className="d-block mb-3">
                    <small className="font-italic mb-5"></small>
                  </Link>
                </Form>
              </Col>
              <Col
                md={{ span: 4, order: 2 }}
                xs={{ span: 12, order: 3 }}
                className="align-self-end signupForgot pt-4"
              >
                <Link to="/resetPassword" className="d-block mb-3 text-center">
                  <small className="font-italic mb-5 text-center">
                    Forgot password?
                  </small>
                </Link>

                <Link to="/resetPassword" className="d-block mb-3 text-center">
                  <small className="font-italic mb-5 text-center">
                    Already have an account? Login
                  </small>
                </Link>
              </Col>
              <Col md={{ span: 4, order: 3 }} xs={{ span: 12, order: 2 }}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="azul-claro">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={registro.password}
                    onChange={(e) => {
                      setRegistro({ ...registro, password: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to Riderz website termans and conditions and privacy policy."
                    onChange={(e) => {
                      setRegistro({
                        ...registro,
                        termsConditions: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to receive emails from Riderz including newsletters, special offers, etc. Yoy can unsubscribe at any time."
                    onChange={(e) => {
                      setRegistro({ ...registro, newsletter: e.target.value });
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="px-5 py-2 d-block btn-block rounded-pill"
                  style={{ backgroundColor: "#05387e", border: "none" }}
                  onClick={handleRegistro}
                >
                  Register
                </Button>
                <p className="text-center mt-2 mb-2 or">Or</p>

                <Button
                  variant="primary"
                  type="submit"
                  className="px-5 py-2 d-block btn-block rounded-pill"
                  style={{ backgroundColor: "#187cb8", border: "none" }}
                >
                  Login with Facebook
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  );
}

export default App;
