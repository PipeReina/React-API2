
import img from './foto.jpg'

function Carst() {
    return (
    <>
            <div class="perso">
            <div class="superior">
                <div class="divNu"><img src={img} class="imgNu"/></div>
                <div class="nombreNu"><div><p>Diego Rodriguez</p></div>
                <div class="estrellita">
                <form>
                    <p class="clasificacion">
                      <input id="radio1" type="radio" name="estrellas" value="5" />
                     <label for="radio1">★</label>
                     <input id="radio2" type="radio" name="estrellas" value="4" />
                     <label for="radio2">★</label>
                     <input id="radio3" type="radio" name="estrellas" value="3" />
                     <label for="radio3">★</label>
                     <input id="radio4" type="radio" name="estrellas" value="2" />
                     <label for="radio4">★</label>
                     <input id="radio5" type="radio" name="estrellas" value="1" />
                     <label for="radio5">★</label>
                    </p>
                  </form></div>
            </div>
            </div>
            <div class="lo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempora rem architecto, consequatur earum nobis ut ipsa expedita itaque.</div>
        </div>
    </>
    );
  }

  export default  Carst;
