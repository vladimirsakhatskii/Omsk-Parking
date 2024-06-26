//import Button from "../Button/Button";
import ParkInfo from "../ParkInfo/ParkInfo";
import "./ParkUl.css";

export default function ParkUl({text0}) {
  return (
    <ul>
      <li>
        <ParkInfo text={text0}/>
      </li>
    </ul>
  );
}
