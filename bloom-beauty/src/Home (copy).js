import React from 'react';
import './/NavBar.css'
import video from './video/video.mp4';


function Home(){

    return(
      <>
       <div className='main'>
  <video src={video} loop muted autoPlay></video>   
          
  <div className='overlay '>
        <h1>Discover</h1>
      </div>
       
    
    {/* <div className="cards">
      <div>card</div>
      <div>card</div>
      <div>card</div>
      <div>card</div>
    </div> */}
  
     </div>

     </>
    )
}
export default Home