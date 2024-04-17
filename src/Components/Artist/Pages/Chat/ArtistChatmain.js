import React from 'react';
import "./ArtistChatmain.css"
import ArtistSidebar from '../../ArtistSidebar';
import chatimg from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import { Link } from 'react-router-dom';
function ArtistChatmain() {
  return (
    <>
    <div  className='row'>
    <div className='col-2'>
<ArtistSidebar/>
    </div>
<div className='col-10 ArtistChatmain'>
    <h1>Chats</h1>

<div className='artist-listchatting'>
<Link to="/artist_chat">
  <div className='artistchatmain-lists'>
        <div className='artistchatmainimg'>
        <img src={chatimg}/>
      </div>
      <div className='artistchatmaincontent'>
      <h2>Name</h2>
        <p>last send message....</p>
        <h3>12:30</h3> 
      </div>
            
    </div>
    
    </Link>
  
    </div>
<div className='artist-listchatting'>
<Link to="/artist_chat">
  <div className='artistchatmain-lists'>
        <div className='artistchatmainimg'>
        <img src={chatimg}/>
      </div>
      <div className='artistchatmaincontent'>
      <h2>Name</h2>
        <p>last send message....</p>
        <h3>12:30</h3> 
      </div>
            
    </div>

    </Link>
  
    </div>
<div className='artist-listchatting'>
<Link to="/artist_chat">
  <div className='artistchatmain-lists'>
        <div className='artistchatmainimg'>
        <img src={chatimg}/>
      </div>
      <div className='artistchatmaincontent'>
      <h2>Name</h2>
        <p>last send message....</p>
        <h3>12:30</h3> 
      </div>
            
    </div>

    </Link>
  
    </div>

  
</div>
</div>
    </>
 
  )
}

export default ArtistChatmain