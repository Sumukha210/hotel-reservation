import Carousel from "react-bootstrap/Carousel";
import { HotelImages } from "../../Common/HotelImages";
// import { HotelImages } from "../../common/HotelImages";

const CarouselSlider = () => {
  return (
    <>
      <div className="carouselSlider">
        <Carousel fade controls={false}>
          {HotelImages && HotelImages.length
            ? HotelImages.slice(3, 6).map(image => (
                <Carousel.Item key={image}>
                  <img className="d-block w-100" src={image} alt={image} />
                </Carousel.Item>
              ))
            : []}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider;

export interface ICarousel {}
