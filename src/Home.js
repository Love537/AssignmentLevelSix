import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import data from './Data.json';

function Home(){
    return(
      <div class="container component">
        <h1>Welcome to COMP.6210 react application home page</h1>
        <p><strong>Use above menue to navigate the app.</strong></p>
        <p> <img src='images/SCP-Home.jpg' alt='Roman' /></p>

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
        </div>
    )
  }
  export default Home;