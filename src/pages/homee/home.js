import './home.css';
import Nav from '../../components/nav/nav.js';
import Pienav from '../../components/Pienav/pienav.js';
import Razones from '../../components/razones/razones.js';
import Direc from '../../components/direc/direc.js';
import Nues from '../../components/Nuestros/nuestros.js';
import CarstUsu from '../../components/Carts-Usuarios/carts-usuarios.js';
import Footer from '../../components/footer/footer.js';


function Home() {
  return (
    <div>
    <Nav />
    <Pienav />
    <Razones />
    <Direc />
    <Nues />
    <CarstUsu />
    <Footer />
    </div>
    
  );
}

export default Home;
