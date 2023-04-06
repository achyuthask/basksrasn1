import React, { useContext } from "react";
import theContext from "./context";

const Third =()=>{
   const reciveddata = useContext(theContext);
    return(
<div>

    <h2>Thirdpage</h2>
    <h4>{reciveddata}</h4>
</div>
    );
}


export default Third;