import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomBtn from "../Components/Common/CustomBtn";
import Extra from "../Components/Layouts/AuthForm/Extra";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthForm = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className="authForm">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="authForm__container">
              <h2 className="text-center heading-2 pb-3 text-capitalize">
                {isLogin ? "login" : "register"}
              </h2>
              <Form>
                <Form.Group>
                  <Form.Control placeholder="name..." />
                </Form.Group>

                <Form.Group>
                  <Form.Control placeholder="email..." />
                </Form.Group>

                <Form.Group>
                  <Form.Control placeholder="password..." />
                </Form.Group>

                <Form.Group>
                  <Form.Control placeholder="confirm password..." />
                </Form.Group>
                <CustomBtn name="Submit" BtnType="submit" />
              </Form>

              <Extra handleAuthForm={handleAuthForm} isLogin={isLogin} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthForm;
