import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav aria-label="Основная навигация">
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
