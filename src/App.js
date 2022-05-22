import './style.css';
import Info from './Components/Info';
import Reproductor from './Components/Reproductor';
import Logo from './Source/img/Logo.jpg'


export default function App() {
  return (
      <div>
      <header>
          <div class="logo">
              <img src={Logo} alt="" class="logoHead"/>
          </div>
          <h3>Greatest 80's & 90's Rock-Metal Albums</h3>
          <a href="#listen" class="btnlisten">Listen</a>

      </header>
      <section className='contenedorP'>

     
        <Info />
        <a name="listen"/>
        <Reproductor />

      </section>

    </div>
  )
}

