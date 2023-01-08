import './index.css'
import Typewriter from 'typewriter-effect'
import Links from './Links';

import Prog  from './happy-hacker.json'
import Lottie from 'lottie-react'

const Intro =()=>{
     return (<div className="intro" data-aos="fade-up">
             <div className="data">
             <Typewriter
               onInit={(typewriter)=>
               {
                    typewriter
                    .typeString("Hello!")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("I am Chaimae")
                    .start()
               }}/>
               <div className="text">
                    <Typewriter className="text"
                    onInit={(typewriter)=>
                    {
                         typewriter
                         .pauseFor(3500)
                         .typeString("a computer science engineering\nstudent 💻 ")
                         .start()
                    }}/>
               </div>
               <Links/>
               </div>
               <Lottie className="lottie"animationData={Prog}/>
          </div>
          )
}
export default Intro;