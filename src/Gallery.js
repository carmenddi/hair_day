import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Foto1 from "./images/Foto1.jpeg";
import Foto2 from "./images/Foto2.jpeg";
import Foto3 from "./images/Foto3.jpeg";
import Foto4 from "./images/Foto4.jpeg";
import Foto5 from "./images/Foto5.jpeg";




export default function Gallery () {
    return (
        <div className='title' id='gallery'>
        <h2>GALLERY</h2>
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
        >
            <div>
                <img src={Foto1} alt="Slide 1" />
            </div>
            <div>
                <img src={Foto2} alt="Slide 2" />
            </div>
            <div>
                <img src={Foto3} alt="Slide 3" />
            </div>
            <div>
                <img src={Foto4} alt="Slide 4" />
            </div>
            <div>
                <img src={Foto5} alt="Slide 5" />
            </div>
        </Carousel>
        </div>
    )
}