import React from 'react'
import Card from './componants.jsx/Card'
const App = () => {
  const users = [
    {
      "username": "jay patel",
      "age": 25,
      "location": "junagadh"
    },
    {
      "username": "sarthak Aghera",
      "age": 14,
      "location": "rajkot"
    },
    {
      "username": "arjun Sharma",
      "age": 28,
      "location": "manavadar"
    },
    {
      "username": "kruti dhadhl",
      "age": 22,
      "location": "vadodara"
    },
    {
      "username": "radha patel",
      "age": 35,
      "location": "morbi"
    },
    {
      "username": "kajal ram",
      "age":225,
      "location": "dahod"
    },
    {
      "username": " manisha patel",
      "age": 31,
      "location": "kodvav"
    },
    {
      "username": "mona varma",
      "age": 25,
      "location": "rangpur"
    }
  ]
  
  return (
    <div>
      <div className= 'p-10 '>  
       {users.map (function(elem,abc) {
return <Card  key={abc} username={elem.username} age={elem.age} location={elem.location}/>
       }

       )

       }
        
      
       
      </div>
     
    </div>
  )
}

export default App