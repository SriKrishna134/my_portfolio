import "./index.scss"; 
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faJava, faLinux, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import LanguageList from "./LanguageList";
import sideend from '../../assets/images/sideend.png';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className = "container about-page"> 
                <div className = "text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass}  strArray = {"About me".split("")} idx={15}/>
                        <img className="profile" src={sideend} alt="profile"></img>
                    </h1>
                    <p>
                      
                    <p style={{ color: 'black' }}>
                    I am a very ambitious software developer with a unique background that has prepared me to be a team player who communicates effectively, faces problems analytically and has the technical skills to tackle any challenge.
                    </p>
                     
                    <br/>
                    <LanguageList />
                    <Link to="/about/tech" className="flat-button">FRAMEWORKS/TECHNOLOGIES</Link>
                    <Link to="/about/dev" className="flat-button">DEVELOPMENT TOOLS</Link>
                    </p>
                </div>
                <div className = "stage-cube-cont">
                    <div className = "cubespinner"> 
                        <div className = "face1">
                            <FontAwesomeIcon icon={faNodeJs}/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faLinux}/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava}/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About