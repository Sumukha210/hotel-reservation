import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomBtn from "../../Common/CustomBtn";
import { useRouter } from "next/router";
import CarouselSlider from "./CarouselSlider";
import AvailabilityChecker from "../../Common/AvailabilityChecker";

const Header = () => {
  const { push } = useRouter();

  const handleDiscoverNow = () => {
    push("/rooms");
  };

  return (
    <div className="Header">
      <CarouselSlider />

      <div className="Header__content">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={6} lg={7} className="my-3">
              <h2 className="Header--heading header-1 font-weight-bold">
                Perl A Luxury Hotel
              </h2>
              <p className="Header--para my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                ipsa quam saepe laborum laudantium natus non voluptatum,
                excepturi corrupti ratione?
              </p>
              <CustomBtn name="Discover now" btnFun={handleDiscoverNow} />
            </Col>

            <Col md={6} lg={5} className="mt-3">
              <AvailabilityChecker />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
