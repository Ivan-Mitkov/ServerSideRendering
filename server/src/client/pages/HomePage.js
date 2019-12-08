import React from 'react';

const Home=(props)=>{
return(
    <div>
    <div>
        I'm the Home component with nodemon
    </div>
    <button onClick={()=>console.log('Hi there')}>Press me</button>
    </div>
)
}

export default {component:Home};