import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>To-DO</Link>
                <Link to='/swapi'>SWApi</Link>
            </nav>
        </header>
    )
}