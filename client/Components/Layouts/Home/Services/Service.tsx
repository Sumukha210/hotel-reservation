import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { IServices } from ".";

const Service = ({ name, Icon }: IServices) => {
  return (
    <>
      <Col md={6} lg={4}>
        <Card className="mb-4">
          <Card.Header className="text-center">{Icon}</Card.Header>
          <Card.Body>
            <Card.Title as="h4">{name}</Card.Title>
            <Card.Text className="font-weight-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;
