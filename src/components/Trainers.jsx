import React, { useState, useEffect } from 'react';
import trainerHandler from '../handlers/trainerHandler';
import "../index.css"
import "../style/Trainers.css"

const Trainers = () => {
  const [trainer, setTrainers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await trainerHandler.loadTrainers();
    const filteredData = data.filter(trainer => trainer.isActive === true);
    setTrainers(filteredData);
  };

    return (
      <>
        <div id='containerTrainers'>
            {trainer.map((item) => (
                <div key={item.id}>
                  <img id='ourTeam' src={`data:image/jpg;base64,${item.photo}`} alt={item.name} />
                </div>
            ))}
        </div>

    </>
    )
};
  
export default Trainers;