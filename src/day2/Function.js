import React , {useState} from 'react'


const Function = () => {

  const [show, setShow] = useState(true)

  function clickchangefun(){
    setShow(!show);
  }
  
    return (
  
      <div  >
        
        <button className='btn1' onClick={ clickchangefun}>click for function </button>
 {
    
    show  ?  <div className='bigbox1'> <h1 style={{fontSize:"30px"}}>This is  functional component</h1>
        </div> 
      : null
    
  } 
   
  </div>
  )
}

export default Function