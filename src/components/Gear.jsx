import '../style/gear.css'
const Gear = () => {

    return (
        <div>
            
            <div className="gearContainer">
                <div>
                    <h1 id='Gearh1'>LA EQUIPACIÓN</h1>
                    <p className='gearPContainer'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ratione assumenda ad voluptatem autem nemo omnis temporibus? Deleniti accusamus eos maiores totam iure, quaerat corrupti recusandae beatae consequatur cumque? Quisquam officiis fuga cumque quasi delectus recusandae, impedit error aperiam corrupti vel neque quam ad tempora labore eum autem dolorum veritatis.
                    </p>
                </div>
                
                <img className='gearPhoto rounded-md' src="src\assets\img\Gear2.png" alt="Equipación, primera imagen" />
                <img className='gearPhoto rounded-md' src="src\assets\img\Gear1.png" alt="Equipación, segunda imagen" />
            
            </div>
        </div>
    );
};

export default Gear;