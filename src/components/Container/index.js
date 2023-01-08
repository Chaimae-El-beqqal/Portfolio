import './index.css';
import{useEffect}  from "react"
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Container=()=>
{
    useEffect(()=>{AOS.init({duration:3000})},[])
    return(
        <div className="container">
            <Intro />
            <About />
            <Projects />
            <Contact />



        </div>
    )
}
export default Container;