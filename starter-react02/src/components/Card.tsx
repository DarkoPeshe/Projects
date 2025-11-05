import type { Bike } from "../interfaces/Bike";
import "./Card.css";

type Props = {
  bike: Bike;
};

const Card = ({ bike }: Props) => {
  return (
    <div className="card">
      <img
        src={`/img/${bike.image}.png`}
        className="card-img-top"
        alt={bike.name}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{bike.name}</h5>
        <p className="card-text">{bike.price} EUR</p>
      </div>
    </div>
  );
};

export default Card;
