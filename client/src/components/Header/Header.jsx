import Logo from "../Logo";
import Button from "../Button/Button";
import "./Header.css";

export default function Header({ active, onChange }) {
  return (
    <header>
      <section className="intro">
        <Logo />
        <h1 id="intro-text">Парковки Омска</h1>
      </section>
      <section className="btn-group">
        <Button
          className={"btn"}
          isActive={active === "singUp"}
          onClick={() => onChange("singUp")}
        >
          <img src="../ImgButton/button_enter.svg" alt="" />
        </Button>
        <Button className={"btn"}>
          <img src="../ImgButton/button_user.svg" alt="" />
        </Button>
      </section>
    </header>
  );
}
