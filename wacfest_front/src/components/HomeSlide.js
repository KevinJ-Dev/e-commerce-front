import '../stylesheets/HomeSlide.css';
import holi from '../assets/holi-png-a-joyful-and-colorful-festival-3-11583815213igyikitocm.png';

export default function HomeSlide(){
    return <div className="container-ticketing">
        <div className="container-bg-black">
            <img src={holi} width="1250" height="1080"/>
        </div>
    </div>
}