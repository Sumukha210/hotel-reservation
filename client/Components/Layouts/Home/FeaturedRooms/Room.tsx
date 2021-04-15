import NextImage from "next/image";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import TableData from "../../../Common/TableDate";
import { FaRupeeSign } from "react-icons/fa";
import CustomBtn from "../../../Common/CustomBtn";
import { IRoomInfo } from "./Interfaces";

const Room = ({ name, img, price, size, bed, services }: IRoomInfo) => {
  return (
    <>
      <Col md={6} lg={3} style={{ overflow: "hidden" }}>
        <div className="rooms__card mb-3">
          <div className="rooms__card--img">
            <NextImage src={img} layout="fill" />
          </div>
          <div className="rooms__card--content">
            <div className="rooms__card--show">
              <h2 className="rooms__card--heading">{name}</h2>
              <h2 className="rooms__card--price ">
                <span>
                  {price}
                  <FaRupeeSign />
                </span>
                <span>
                  /<sub>day</sub>
                </span>
              </h2>
            </div>

            <Table borderless={true} responsive>
              <tbody>
                <TableData title="size" ans={size} />
                <TableData title="bed" ans={bed} />
                <TableData title="services" ans={services} />
              </tbody>
            </Table>
            <CustomBtn name="book now" />
          </div>
        </div>
      </Col>
    </>
  );
};

export default Room;
