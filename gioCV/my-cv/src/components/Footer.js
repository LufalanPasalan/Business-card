import "../styles/Footer.css";
import facebook from '../images/Facebook.png'
// import github from '../images/GitHub.png.'
import Instagram from '../images/Instagram.png'
import Linkedin from '../images/Linkedin.png'
import Twitter from '../images/Twitter.png'




export default function Footer(){
    return(
        <footer className="icons">
            <img src={facebook} alt="8==D"></img>;
            {/* <img src={github} alt="8==D"></img>; */}
            <img src={Instagram} alt="8==D"></img>;
            <img src={Linkedin} alt="8==D"></img>;
            <img src={Twitter} alt="8==D"></img>;
        </footer>
    )
}