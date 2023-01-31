import { useState } from 'react';
import Typewriter from 'typewriter-effect'

function TypeWriter() {
   const [state]=useState({
      title:"Hi",
      titletwo:"I'm",
      titlethree:'Aman',

   });
  return (
    <div className='TypeWriters'>
      <h2>
         <div>
         <div className='title'>{state.title}</div>
         <div className='titletwo'>{state.titletwo}</div>
         <div className='titlethree'>{state.titlethree}</div>
      </div>
      </h2>
      <div className="text">
         <Typewriter
         options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
               "I'm a web developer",
               "I'm a software developer",
               "I'm a software"
         ]
         }}
         />
      </div>
    </div>
  )
}

export default TypeWriter