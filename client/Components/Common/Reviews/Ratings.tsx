import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export interface IRatings {
  rating: number;
}

const Ratings: React.FC<IRatings> = ({ rating }) => {
  return (
    <h5 className="starRating">
      {rating >= 1 && <AiFillStar />}

      {rating >= 2 ? (
        <AiFillStar />
      ) : rating >= 1.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}

      {rating >= 3 ? (
        <AiFillStar />
      ) : rating >= 2.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}

      {rating >= 4 ? (
        <AiFillStar />
      ) : rating >= 3.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}

      {rating >= 5 ? (
        <AiFillStar />
      ) : rating >= 4.5 ? (
        <BsStarHalf />
      ) : (
        <AiOutlineStar />
      )}
    </h5>
  );
};

export default Ratings;
