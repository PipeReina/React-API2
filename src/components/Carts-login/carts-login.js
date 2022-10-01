import img from './fondoLogin3.jpg'

function CuaLogin() {
    return (
    <div class="bodylogin">
        <img src={img} class="fondologin" />
        <div class="login">
            <a href="/"><div class="logoNegro"></div></a>
        <div class="blanco"></div>
        <div class="usulogin"></div>
        <div class="loginmedio">
            <form>
            Usuario<br />
            <input type="text" name="username" /><br />
            Contraseña<br />
            <input type="password" name="psw" />
          </form></div>
          <div class="loginabajo"><a href="/Dashboard"><button>Ingresar</button></a><br /><p>¿No tienes una cuenta? <a href="/Regis"> Registrate aqui.</a></p></div>
       </div>
    </div>
    );
  }

  export default  CuaLogin;
