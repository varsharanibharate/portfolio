
import {Link} from "react-router-dom"
import './index.css'
import Pdf from '../../data/VarsharaniBharateCV.pdf';

const Header = () => {
    return(
        <div className="container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                <a href = {Pdf} target = "_blank" rel="noreferrer">CV</a>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Header