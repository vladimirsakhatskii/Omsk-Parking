import Button from "./Button/Button"

export default function Header({ active, onChange }) {
    return (
        <header>
            <h1>Парковки Омск</h1>
            <Button text='Вход' isActive={active === 'singUp'} onClick={() => onChange('singUp')} />
            {/* Сделать логотип, приветствие, кнопка перехода на страницу регистрации или входа и отображение аккаунта */}
        </header>
    )
}