import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import CustomBtn from "../../Common/CustomBtn";

const WhyChooseUs = () => {
  const { push } = useRouter();

  const handleBookNow = () => {
    push("/contact");
  };

  return (
    <div className="Home--whyChooseUs my-5">
      <Container>
        <Row className="justify-content-center align-items-center text-center py-5">
          <Col md={10} lg={8} className="py-4">
            <p className="primary-color-font">why choose us</p>
            <h2 className="pt-1 pb-4 text-light font-weight-bold">
              Contact us now to get the latest deals and for the next booking
            </h2>
            <CustomBtn name="booking now" btnFun={handleBookNow} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
