import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NextImage from "next/image";
import { HotelImages } from "../Components/Common/HotelImages";
import CustomHeader from "../Components/Common/Header";
import { useState } from "react";
import ImageModal from "../Components/Layouts/Gallery/ImageModal";

const Gallery = () => {
  const [modalImg, setModalImg] = useState("");
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
    setModalImg("");
  };

  const handleImage = (url: string) => {
    setShow(true);
    setModalImg(url);
  };

  return (
    <div className="Gallery">
      <ImageModal src={modalImg} show={show} handleClose={handleCloseModal} />

      <CustomHeader title="our gallery" />
      <Container>
        <Row className="justify-content-start align-items-center my-5">
          {HotelImages.map(url => (
            <Col md={6} lg={4} key={url}>
              <div className="Gallery__card mb-3">
                <NextImage
                  layout="responsive"
                  height={130}
                  width="100%"
                  src={url}
                  alt={url}
                  onClick={() => handleImage(url)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
