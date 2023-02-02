import React from 'react'
import '../App.css'
import { useState } from 'react'

function Card(props) {
  
 const {det,setDet} =useState(props)
  const see =(props)=>{
      setDet(props.dit)
  }
  return (
    <>
     <div className="card">
      <div className="card-inner">
        
        <img src=''/>
        <h2 className='card_title'> {props.title}{det} </h2>
        <div className="about" >
          
            <p className='card_des'>{props.des}</p>
            <button onClick={see}>See Details</button>
        </div>
      </div>
      </div>   
        


    </>
  )
}

export default Card