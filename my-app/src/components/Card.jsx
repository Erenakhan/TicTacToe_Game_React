import React from 'react'
import '../App.css'
import { useState } from 'react'

function Card(props) {
  
/*  const {det,setDet} =useState(props)
  const see =(props)=>{
      setDet(!props.dit)
  } */
  const [showProps, setShowProps] = useState();
  

  const handleClick = () => {
    setShowProps(!showProps);
  };
  return (
    <>
     <div className="card">
      <div className="card-inner">
        
        <img src=''/>
        <h2 className='card_title'> {props.title}</h2>
        <div className="about" >
          
            <p className='card_des'>{props.des} {showProps && <p className='card_des'>{props.dit}</p>} </p>
            <button  onClick={handleClick}>See Details</button>
           
            <div>
      

    </div>
        </div>
      </div>
      </div>   
        


    </>
  )
}

export default Card