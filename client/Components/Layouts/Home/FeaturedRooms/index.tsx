import Row from "react-bootstrap/Row";
import { IRoomInfo } from "./Interfaces";
import Room from "./Room";

const Rooms = () => {
  return (
    <div className="my-5 mx-2 Home--rooms">
      <Row>
        {roomInfo
          .slice(0, 4)
          .map(({ name, price, size, bed, services, img }: IRoomInfo, i) => (
            <Room
              key={i}
              name={name}
              price={price}
              bed={bed}
              services={services}
              img={img}
              size={size}
            />
          ))}
      </Row>
    </div>
  );
};

export default Rooms;

export const roomInfo: IRoomInfo[] = [
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(2).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(3).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(4).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(5).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(4).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(5).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(4).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(5).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(4).jpg",
  },
  {
    name: "deluxe room",
    price: "200",
    size: "30 ft",
    bed: "king beds",
    services: "wifi,television,batroom",
    img: "/images/hotel-(5).jpg",
  },
];
