import React from 'react';
import fetchData from './Fetch.json';
function moreInfo(){
    return(
       <div>
        {
           fetchData.map((fetchData,i) =>(
            <div key={{i}}>
            <h1>{fetchData.title}</h1>
            </div>
           ))
        }
            
        
       </div>
    )
}
export default moreInfo;

