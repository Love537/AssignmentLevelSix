import {Link, link} from 'react-router-dom';
import './nav.css';

function Nav({data})
{  
    return(
        <nav>
        <ul>
        {
        data.map(
            Scptwo => (
                <div className='Navresponsive'>
         <li key={Scptwo.item}>
         <Link to={`${Scptwo.item}`} className='link'>
         {Scptwo.item}</Link>
         </li>
         </div>
        )
        )
        }
        </ul>
        </nav>
        )
        
}
export default Nav;