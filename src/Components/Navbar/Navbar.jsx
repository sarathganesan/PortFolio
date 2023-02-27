
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Naavbar = () => {
   
  return (
    <header className='navbar  '  >
    <div className="n-wrapper" >
        <div className="n-left">
            <div className="n-name">Sarath</div>
            <Toggle/>
        </div>
        <div className="n-right col-md-6">
        <div className="n-list">
       
       
                <ul className='header-menu' 
                style={{ listStyle:'none', position:'fixed', alignSelf:'center', left:'12rem' ,top:'.3rem' }} >
                    <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Services' >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Experience' >
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Portfolio' >
                    <li>Portfolio</li> 
                    </Link>
                    <Link spy={true} smooth={true} to='Testimonials' >
                    <li>Testimonials</li>
                    </Link>
                </ul>
                
                
            </div>
            <Link spy={true} smooth={true} to='Contact'  >
            <button className="button n-button ">
                Contact 
            </button>
            </Link>
            
       
            
        </div>
    </div>
    </header>
  )
}

export default Naavbar