import './Footer.css'

function Footer(){
    return(
        <div className="Footer">
            <footer>
                <ul className="footer-itens">
                    <img src= {require('../imgs/SESI.png')} className='sesi'></img>
                    <div className='textao'>
                    <li>
                        <p>&copy;2024 Todos os direitos reservados ao povo do 3°N/Informática para internet</p>
                    </li>
                    <li>
                        <p className='texto'>Contato:almossar@leandrobochecha.com</p>
                    </li>
                        </div>
                </ul>



            </footer>
        </div>
    )
}

export default Footer;