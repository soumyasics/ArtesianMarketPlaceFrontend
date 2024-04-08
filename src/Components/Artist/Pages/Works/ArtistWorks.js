import React from 'react'
import "./ArtistWorks.css"
import ArtistSidebar from '../../ArtistSidebar'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
function ArtistWorks() {
  return (

    <>
      <div className='ArtistWorks'>

        <div className='row'>

          <div className="col-2">
            <ArtistSidebar />
          </div>

          <div class='col-10 works' >
<div className='works-form'>
  
<h1>Works</h1>

  <div className='works-input'>
    <input type='text' placeholder='Art Name'/>
  </div>
  <div className='works-input'>
    <input type='text' placeholder='Price'/>
  </div>
  <div className='works-files'>
    <input type='file'/>
  </div>
  <div className='works-btn'>
    <button>ADD</button>
  </div>
</div>

<div className='works-list'>
<h1>WORKS LIST</h1>

<div className='works-table'>
        
        <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th>SL</th>
                    <th>Work</th>
                    <th>Price</th>
                    <th>Likes</th>
                    <th>Sales count</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody >
        
                      <tr >
                        <td>1</td>
                        <td>Work name</td>
                        <td>250</td>
                        <td>250</td>
                        <td>200</td>
                        
                        
                       
                      
                      </tr>
                
                </tbody>
              </Table>
              

        </div>

    

</div>



          </div>
        </div>
      </div>
    </>


  )
}

export default ArtistWorks