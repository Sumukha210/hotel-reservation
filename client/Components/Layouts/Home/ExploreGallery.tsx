import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomBtn from "../../Common/CustomBtn";
import { useRouter } from "next/router";

const ExploreGallery = () => {
  const { push } = useRouter();

  const handleBtn = () => push("/gallery");

  return (
    <div className="Home--exploreGallery " style={{ margin: "6rem 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-3 mb-md-0">
            <p className="primary-color-font">our gallery</p>
            <h2 className="header-2 font-weight-bold">
              Explore The Most Beautiful In The Hotel
            </h2>
          </Col>
          <Col lg={6}>
            <p className="text-secondary mb-4 mb-md-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia
              deserunt mollit anim.
            </p>
            <CustomBtn name="view gallery" btnFun={handleBtn} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExploreGallery;
