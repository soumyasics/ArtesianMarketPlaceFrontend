import React, { useState } from 'react'
import Usernav from './Usernav'
import Navbar from './Navbar'



function NavMain() {
    const[status,setStatus]=useState(true)

    if (status==true){
        return(
            <Usernav/>

        )
    }
    else{
        return(
<Navbar/>
        )
    }
    

}

export default NavMain