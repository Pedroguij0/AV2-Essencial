import { Link } from 'react-router-dom';
import './Navbar.css'
function NavBar(){
    return(
        <div className="Nave">
            <nav>
                <ul className='lista'>
                    <img src= {require('../imgs/SENAI.png')} alt='' className='senai'/>
                    <li><Link to='/' className='Link-nav'><b>Home</b></Link></li>
                    <li><Link to='/Forms' className='Link-nav'><b>Contato</b></Link></li>
                    <li><Link to='/Sobre' className='Link-nav'><b>Quem Somos</b></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;