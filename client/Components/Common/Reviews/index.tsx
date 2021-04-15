import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Ratings from "./Ratings";

export interface IReview {
  comment: string;
  rating: number;
  name: string;
}

const Reviews = () => {
  return (
    <div className="Reviews my-5">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col sm={12} md={10} lg={8}>
            <p className="primary-color-font">Testimonials</p>
            <h2 className="header-2 text-capitalize">what customers say</h2>
            <Carousel
              indicators={false}
              prevIcon={<BsArrowLeft />}
              nextIcon={<BsArrowRight />}>
              {ReviewItems.map(({ name, rating, comment }: IReview) => (
                <Carousel.Item key={name} className="text-capitalize">
                  <p>{comment}</p>
                  <div className="pt-4  d-flex justify-content-center align-items-center">
                    <Ratings rating={rating} />
                    <h3 className="pl-3">{name}</h3>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;

const ReviewItems: IReview[] = [
  {
    name: "rohit",
    rating: 2.7,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id praesentium magni, ipsa at quam exercitationem? Necessitatibus ea velit sint.",
  },
  {
    name: "virat",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id praesentium magni, ipsa at quam exercitationem? Necessitatibus ea velit sint.",
  },
  {
    name: "sachin",
    rating: 3.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id praesentium magni, ipsa at quam exercitationem? Necessitatibus ea velit sint.",
  },
];
