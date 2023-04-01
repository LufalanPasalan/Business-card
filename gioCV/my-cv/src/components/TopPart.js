import "../styles/TopPart.css";
import profile from '../images/fuecoco.jpg'



export default function TopPart(){
    return(
        <header className="toppy">
            <img src={profile} alt="" className="fuecoco"></img>
            <div className="info">
                <h1>giorgi samadashvili</h1>
                <h2>frontend developer</h2>
                <h3>giosamad.website</h3>
            </div>
        </header>
    )
}