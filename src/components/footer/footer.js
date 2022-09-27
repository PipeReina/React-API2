import img1 from './instagram.png';
import img2 from './facebook.png';
import img3 from './twitter.png';
import img4 from './ubi.png';
import img5 from './tel.png';



function Footer() {
    return (
        <>
        <footer>
        <div class="lom2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quidem dolorem omnis iste ea porro labore explicabo laudantium et.</p>            

        <div class="redes"><div class="facebook"><img src={img1} /><img src={img2} /><img src={img3} /></div></div></div>
        <div class="contac">
            <div class="contacArriba">
            <div><img src={img4} /></div><div class="direcc"><p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p></div></div>
           <div class="contacAbajo"> <div><img src={img5} /></div><div class="direcc2"><p>+57 601 4567899</p></div></div>
        </div>
        <div class="publicidades">
            <div class="poli1"><p>Politicas de privacidad</p></div>
            <div class="poli1"><p>Politicas de privacidad</p></div>
        </div>
    </footer>
    </>
    );
  }

  export default Footer;
