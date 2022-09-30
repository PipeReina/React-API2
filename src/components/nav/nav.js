import logo from './Hotelia horizontal blanco.svg';


function Nav() {
    return (
    <nav>
      <div class="logo">
          <img src={logo} />
          <i class="fi fi-br-menu-burger" onclick="MostrarOcultar()"></i>
      </div>
     <div id="caja">
      <div class="menu">
          <a href="index.html" class="item">Inicio</a>
          <a href="ubicanos.html" class="item">Ubícanos</a>
          <a href="opiniones.html" class="item">Opiniones</a>
          <hr class="menu-hr" noshade=""></hr>
          <a href="/Login" class="item"><button class="navbar-button"><i class="fi fi-sr-user"></i> Iniciar Sesión</button></a>
      </div></div>
    </nav>
    );
  }

  export default Nav;
