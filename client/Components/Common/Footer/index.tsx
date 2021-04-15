import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import QuickLinks from "./QuickLinks";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer--header py-5">
        <Container>
          <Row>
            <div className="col-md-4 col-sm-12 ">
              <div className="mb-4">
                <h2 className="header-2 text-light pb-3">Perl.</h2>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, tempora?
                </p>
                <SocialMediaIcons />
              </div>
            </div>

            <div className="col-md-2 col-sm-12 offset-md-2 ">
              <QuickLinks />
            </div>

            <div className="col-md-2 col-sm-12 offset-md-2 ">
              <ContactUs />
            </div>
          </Row>
        </Container>
      </div>

      <div className="footer--bottom py-4 text-secondary text-center">
        Copyright ©2021 All rights reserved | This website is created by sumukha
        kb
      </div>
    </footer>
  );
};

export default Footer;
