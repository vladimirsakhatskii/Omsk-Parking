import Logo from "../Logo"
import Button from "../Button/Button"
import './Header.css'


export default function Header({ active, onChange }) {
    return (
        <header>
            <Logo />
            <h1>Парковки Омск</h1>
            <section className="btn-group">
                <Button className='btn' text='Вход' isActive={active === 'singUp'} onClick={() => onChange('singUp')} />
            </section>
            {/* Сделать логотип, приветствие, кнопка перехода на страницу регистрации или входа и отображение аккаунта */}
        </header>
    )
}