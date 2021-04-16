import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomBtn from "../Components/Common/CustomBtn";
import Extra from "../Components/Layouts/AuthForm/Extra";
import { useForm } from "react-hook-form";
import Form_Control from "../Components/Layouts/AuthForm/Form_Control";
import {
  emailProps,
  nameProps,
  passwordProps,
} from "../Components/Layouts/AuthForm/config";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  let watchedValue = watch("password", "");

  useEffect(() => {
    reset();
  }, [isLogin]);

  const handleAuthForm = () => {
    setIsLogin(prev => !prev);
  };

  const onSubmit = (data: any) => {
    console.log("data is", data);
  };

  const FormControlOptions = (title: string): {} => {
    return {
      ...register(title, {
        ...(title === "name"
          ? nameProps
          : title === "email"
          ? emailProps
          : passwordProps),
        validate: value =>
          title === "con_pass"
            ? value === watchedValue || "The passwords do not match"
            : undefined,
      }),
    };
  };

  return (
    <div className="authForm">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={7} xl={6}>
            <div className="authForm__container">
              <h2 className="text-center heading-2 pb-3 text-capitalize">
                {isLogin ? "login" : "register"}
              </h2>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form_Control
                  title="name"
                  options={FormControlOptions("name")}
                  errors={errors}
                />

                <Form_Control
                  title="email"
                  options={FormControlOptions("email")}
                  errors={errors}
                />

                <Form_Control
                  title="password"
                  options={FormControlOptions("password")}
                  errors={errors}
                />

                {!isLogin && (
                  <Form_Control
                    title="con_pass"
                    options={FormControlOptions("con_pass")}
                    errors={errors}
                  />
                )}

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
