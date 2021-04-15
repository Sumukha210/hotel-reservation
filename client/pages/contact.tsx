import CustomHeader from "../Components/Common/Header";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfo from "../Components/Layouts/Contact/ContactInfo";
import ContactForm from "../Components/Layouts/Contact/ContactForm";
import LoadingSpinner from "../Components/Common/LoadingSpinner";

const Contact = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../Components/Layouts/Contact/Map"), {
        loading: () => <LoadingSpinner />,
        ssr: false,
      }),
    []
  );

  return (
    <div className="contact mt-5">
      <Container>
        <Row className="justify-content-between  align-items-start">
          <Col sm={12} lg={5}>
            <ContactInfo />
          </Col>
          <Col sm={12} lg={7}>
            <ContactForm />
          </Col>
        </Row>
        <Map />
      </Container>
    </div>
  );
};

export default Contact;
