import React, { useContext, useState } from "react";

import myContext from "./context";

const Third2 =()=>{
 const   {setState}  =  useContext(myContext);
 const [click,setClick] =useState();
    return(
<div>

    <h2>Thirdpage</h2>
    <input type="text"  onChange={(e)=>{setClick(e.target.value)}}/>
    <button onClick={()=>{setState(click)}}>send data</button>
</div>
    );
}


export default Third2;