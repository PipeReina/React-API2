
import img1 from './slide1.jpg';
import img2 from './slide2.png';
import img3 from './slide3.jpg';
import img4 from './Hotelia negro vertical.svg';


function Pienav() {
    return (
       <><div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">

                </button>
            </div>
            <div class="text1">
                <h1>Lorem ipsum dolor sit,<br /> amet consectetur adipisicing elit.</h1>
            </div>
        </div><div class="text2">
                <p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de lujo donde interactúan los negocios, el ocio y el descanso, gracias a su estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros comerciales, almacenes de lujo y emblemáticos parques para aprovechar la naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño, ponemos a tu disposición una oferta gastronómica tan sofisticada como saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.</p>
            </div>
            <div>
        <img src={img4} class="img2" />
    </div></>
    );
  }

  export default Pienav;
