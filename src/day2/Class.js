import React, {useState} from 'react'

export default function Class() {

const [show, setShow] = useState(true)


function clickchange(){
  setShow(!show);
}


  return (

    <div >
     
      <button className='btn2' onClick={ clickchange}>click for class </button>
   {
  
  show  ?  <div > <h1 style={{fontSize:"30px"}}>This is  class component</h1>
      </div> 
    : null
  
}

      
      
 

    </div>
  )
}