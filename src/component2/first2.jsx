import   {useState} from "react";

import myContext from "./context";
import Second2 from "./second2";


const First2 =()=>{
      const[state,setState] = useState("");
      
    return(
<div>

    <h2>First2</h2>
    <p>{state}</p>


    <br></br>
    <hr></hr>
    <myContext.Provider value={{setState}}>
    <Second2 />

    </myContext.Provider>
  
</div>
    );
}


export default First2;