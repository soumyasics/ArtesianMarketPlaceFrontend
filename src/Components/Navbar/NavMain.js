import React, { useState } from 'react'
import Usernav from './Usernav'
import Navbar from './Navbar'



function NavMain({url}) {
    const[status,setStatus]=useState(true)

    if (status==true){
        return(
            <Usernav url={url}/>

        )
    }
    else{
        return(
<Navbar/>
        )
    }
    

}

export default NavMain