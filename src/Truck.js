import './truck.css';
import image from './Scptwoimg';

function Truck({Scptwo})
{
     
    return(
        
           <div className=" component container">

              <h1><strong>Item #:</strong>{Scptwo.item}</h1>
              <h2><strong>Object Class: </strong>{Scptwo.object}</h2>
              <p> <img src={Scptwo.img} alt={Scptwo.item} /></p>
              <p><strong>Special Containment Procedures:</strong><br></br><br></br>{Scptwo.containment}</p>
              <p><strong>Special Containment Procedures two:</strong><br></br><br></br>{Scptwo.containmenttwo}</p>
           
             
           </div>
        
    )
 
}
export default Truck;