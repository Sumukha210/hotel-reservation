import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { IRoomInfo } from "../Home/FeaturedRooms/Interfaces";
import { roomInfo } from "../Home/FeaturedRooms";
import Room from "./Room";

const Rooms = () => {
  return (
    <div className="Room my-5">
      <Container>
        <Row>
          {roomInfo.map(
            ({ name, bed, size, img, price, services }: IRoomInfo, i) => (
              <Room
                key={i}
                name={name}
                bed={bed}
                size={size}
                img={img}
                services={services}
                price={price}
              />
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Rooms;
