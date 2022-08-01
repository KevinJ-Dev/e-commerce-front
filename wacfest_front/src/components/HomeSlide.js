import '../stylesheets/HomeSlide.css';
const holi = new URL("../assets/holi.png",import.meta.url);

export default function HomeSlide(){
    return <div className="container-slide">
        <div className="container-bg-black">
            <div className="text-info-slide">
                <p>PAYS DE RENNES 26 au 28 AOUT 2022</p>
            </div>
            <div className="f">
                <img className="bg-img" src={holi}/>
            </div>
        </div>
    </div>
}