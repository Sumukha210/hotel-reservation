import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import NextImage from "next/image";
import CustomBtn from "../../Common/CustomBtn";

const AboutInfo = () => {
  const { push } = useRouter();

  const handleReadMore = () => push("/about");

  return (
    <div className="aboutUs my-5 ">
      <Container>
        <Row className="justify-content-between align-items-center ">
          <Col lg={6}>
            <p className="primary-color-font">About us</p>
            <h2 className="header-2  mb-3">Perl Hotel</h2>
            <p>
              perl.com is a leading online accommodation site. We’re passionate
              about travel. Every day, we inspire and reach millions of
              travelers across 90 local websites in 41 languages.
            </p>
            <p>
              So when it comes to booking the perfect hotel, vacation rental,
              resort, apartment, guest house, or tree house, we’ve got you
              covered.
            </p>
            <CustomBtn name="Read more" btnFun={handleReadMore} />
          </Col>
          <Col lg={6} className="mt-4">
            <Row>
              <Col md={6}>
                <figure>
                  <NextImage
                    layout="responsive"
                    height={150}
                    width="100%"
                    src="/images/hotel-(4).jpg"
                    alt="image 4"
                  />
                </figure>
              </Col>
              <Col md={6}>
                <figure>
                  <NextImage
                    layout="responsive"
                    height={150}
                    width="100%"
                    src="/images/hotel-(2).jpg"
                    alt="image 2"
                  />
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutInfo;
