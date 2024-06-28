import ParkUl from "./ParkUl/ParkUl";
import "./SectionPark.css";

export default function SectionPark() {
  return (
    <>
      {/* Доделать таблицу с инфой про парковки */}
      <div className="section-park">
        <table>
          <tr>
            <th>Название парковки:</th>
            <th>Адрес:</th>
            <th>Свободно:</th>
          </tr>
        </table>
        <ParkUl text0="Первая паркавковка" />
        <ParkUl text0="Вторая паркавковка" />
        <ParkUl text0="Третья паркавковка" />
        <ParkUl text0="Четвертая паркавковка" />
        <ParkUl text0="Пятая паркавковка" />
        <ParkUl text0="Шестая паркавковка" />
        <ParkUl text0="Седьмая паркавковка" />
        <ParkUl text0="Восьмая паркавковка" />
        <ParkUl text0="Девятая паркавковка" />
        {/* Так много компонентов для примера */}
      </div>
    </>
  );
}
