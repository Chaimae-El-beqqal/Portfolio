
import './index.css'
import logo from '../../../assets/shifae.png'
import logo1 from '../../../assets/solvitchy.png'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ()=> {
     return(
        <div className="project" data-aos="fade-up">
        <h3 className="title">01.🕐 My latest projects</h3>
       <div className="projects">
       <div id="shifae" className="prj">
            <img src={logo} alt="logo1"/>
            <h3 >Shifae WebApp</h3>
            <p className="desc">I worked with a team of four to create this project. It is dedicated to managing medical services, such as scheduling appointments and maintaining a digital medical recorder. It also has a section for doctors.</p>
            <a target="_blank" rel='noreferrer'
                    href='https://github.com/Chaimae-El-beqqal'
                    >
                <FontAwesomeIcon icon={faGithub} color="#c69fe9"/>
            </a>
       </div>
       <div id="solvitchy" className="prj">
            <img src={logo1} alt="logo1"/>
            <h3>Solvitchy MobileApp</h3>
            <p className="desc">This is a mobile application. It's a game for kids to improve their critical thinking and problem-solving skills. It was pair project.</p>
            <a target="_blank" rel='noreferrer'
                    href='https://github.com/android-finalpeoject/solvychi'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#c69fe9"/>
            </a>
       </div>
     </div>
     </div>

     )
}
export default Projects;