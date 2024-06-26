import "./ParkInfo.css";

export default function ParkInfo({ text }) {
  return (
    <div className="box-info">
      <h2 className="name-parks">{text}</h2>
    </div>
  );
}
