import '../components/style/gear.css'


const Gear = () => {

    return (
        <div>
            
          <div className="gearContainer">
            <div className='GearTextContainer'>
               <h1 id='Gearh1'>LA EQUIPACIÓN</h1> <br />
               <p className='gearPContainer text-xl'>
               La equipación del club está compuesta por varias prendas en color negro y azul, con los logotipos de la escuela. <br /> Disponemos de una amplia variedad de opciones, tales como el chándal, polo, camiseta, chaquetón y bolsa grande para llevar tu traje y protecciones.
                  </p>
            </div>

            <div className='flex overflow-x-auto'>
              <img className='gearPhoto rounded-md' src="src\assets\img\Gear2.png" alt="Equipación, primera imagen" />
              <img className='gearPhoto rounded-md' src="src\assets\Gear4.png" alt="Equipación, tercera imagen" />
              <img className='gearPhoto rounded-md' src="src\assets\img\Gear1.png" alt="Equipación, segunda imagen" />              
              <img className='gearPhoto rounded-md' src="src\assets\Gear3.png" alt="Equipación, tercera imagen" />
              <img className='gearPhoto rounded-md' src="src\assets\Macuto.png" alt="Equipación, Macuto" />
            </div>
                
          </div>
        </div>
 
    );
};

export default Gear;