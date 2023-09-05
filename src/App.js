import data from './Data.json';
import Truck from './Truck';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
function App() {
  return (
    <>  <div className='TopPage'><h1>Assignment 1 SCP Subject Files</h1></div>  

    
   <Router>
      <Nav data={data}/>
      
  <Routes>
    {
      data.map(
        Scptwo=>(
          <Route Key={Scptwo.item} 
          path={`${Scptwo.item}`} 
          element={<Truck Scptwo={Scptwo}/>}/>
        )
      )
    },
 

  </Routes>
   </Router>

<Router>
   <Routes>
    { data && data.map((imgScp) =>
       {<Route>
         return(
         <div key={imgScp.id}>
         <img src={imgScp.img} alt=""/>
         </div>  )</Route>
       }
    )
    }
    </Routes>
    </Router>
   </>




  );
}

export default App;

function Home(){
  return(
    <div class="container component">
      <h1>Welcome to COMP.6210 Practice react application</h1>
      <p>use above menue to navigate the app</p>
      </div>
  )
}