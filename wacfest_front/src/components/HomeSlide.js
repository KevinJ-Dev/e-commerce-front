import '../stylesheets/HomeSlide.css';
// import logo from '../assets/logo.png';
const holi = new URL("../assets/holi.png",import.meta.url);

export default function HomeSlide(){
    return <div className="container-slide">
        <div className="container-bg-black background-img">
            <img src={holi}/>
            {/*<img src={logo} width="413" height="388"/>*/}
        </div>
    </div>
}