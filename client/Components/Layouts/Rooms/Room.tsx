import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import NextImage from "next/image";
import TableData from "../../Common/TableDate";
import { FaRupeeSign } from "react-icons/fa";
import CustomBtn from "../../Common/CustomBtn";
import { IRoomInfo } from "../Home/FeaturedRooms/Interfaces";

export interface IRoom extends IRoomInfo {
  id?: string;
}

const Room: React.FC<IRoom> = ({ name, price, size, bed, img, services }) => {
  return (
    <Col md={6} lg={4}>
      <Card className="mb-4">
        <div className="img-wrapper">
          <NextImage
            src={img}
            layout="responsive"
            height="100%"
            width="100%"
            className="card-img-top"
          />
        </div>

        <Card.Body>
          <Card.Title className="text-capitalize" as="h3">
            {name}
          </Card.Title>
          <Card.Subtitle as="h2" className="mb-4 mt-2">
            <span>
              {price}
              <FaRupeeSign />
            </span>
            <span>
              /<sub>day</sub>
            </span>
          </Card.Subtitle>
          <Table borderless={true} responsive>
            <tbody>
              <TableData title="size" ans={size} />
              <TableData title="bed" ans={bed} />
              <TableData title="services" ans={services} />
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <p className="primary-color-font text-capitalize font-weight-bold">
            more info
          </p>
          <CustomBtn name="book now" />
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Room;
