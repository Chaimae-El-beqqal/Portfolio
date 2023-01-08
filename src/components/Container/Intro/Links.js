import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Links=()=>{

    return(
        <div className="links slide-right">
           <a target="_blank" rel='noreferrer'
                    href='https://www.linkedin.com/in/el-beqqal-chaimae-7bb660238
                    '>
                        <FontAwesomeIcon icon={faLinkedin} color="#c69fe9"/>
                    </a>
                    <a target="_blank" rel='noreferrer'
                    href='https://github.com/Chaimae-El-beqqal'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#c69fe9"/>
                    </a>
                    <p><FontAwesomeIcon icon={faEnvelope} color="#c69fe9"  onClick={(e) =>navigator.clipboard.writeText('elbeqqalchaimae19@gmail.com')}/></p>
        </div>
    )
}
export default Links;