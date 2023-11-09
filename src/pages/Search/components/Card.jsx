import Image from "../../../components/Image";
const Card = ({ image, name, authors }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", border: "1px solid black", textAlign: "center" }}
    >
      <Image src={image} alt="..." style={{ height: "15rem" }} lazy />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{authors}</p>
      </div>
    </div>
  );
};
export default Card;
