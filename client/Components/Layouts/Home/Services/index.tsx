import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Service from "./Service";
import { MdLocationOn } from "react-icons/md";
import { IoFastFoodSharp, IoWineSharp } from "react-icons/io5";
import { CgTimelapse, CgSmartHomeWashMachine } from "react-icons/cg";
import { FaBed } from "react-icons/fa";

const Services = () => {
  return (
    <div className="Home--services my-5 ">
      <Container>
        <p className="primary-color-font">what we do</p>
        <h2 className="header-2  text-capitalize">discover our services</h2>

        <Row className="mt-5 align-items-center text-capitalize">
          {ServiceOptions.map(({ name, Icon }: IServices) => (
            <Service name={name} Icon={Icon} key={name} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;

export interface IServices {
  name: string;
  Icon: ReactNode;
}

const ServiceOptions: IServices[] = [
  { name: "travel plan", Icon: <MdLocationOn /> },
  { name: "catering service", Icon: <IoFastFoodSharp /> },
  { name: "baby sitting", Icon: <FaBed /> },
  { name: "laundry", Icon: <CgSmartHomeWashMachine /> },
  { name: "hire driver", Icon: <CgTimelapse /> },
  { name: "drink", Icon: <IoWineSharp /> },
];
