import React from 'react'


const Card = (props) => {
    
  return (
    <div  className=  'shadow-blue-300 bg-blue-400 mr-10 text-black inline-block p-9  m-5 text-center rounded-2xl hover:text-left '>
<h3 className= "text-2xl font-bold">Name    :   {props.username}</h3>
<h3  className="text-2xl font-light" > Age : {props. age}</h3>
<h3  className= "text-2xl " > Location : {props.location}</h3>
    </div>
    
  )
}

export default Card