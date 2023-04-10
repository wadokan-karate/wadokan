import { useState } from 'react'
import { eventHandler } from './handlers/eventHandler';
import './App.css'
import Images from './images';

function App() {
  const [name, setName] = useState("");
const [description, setDescription] = useState("");

const [imgBase64, setImgBase64] = useState(null);
const handleNameChange = (event) => {
  setName(event.target.value);
};
const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
};

const handleImgBase64Change = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setImgBase64(reader.result)
  };
}
const handleSubmitBase64 = (event) => {
  event.preventDefault();
  let newProductBase64RequestModel = { name, description, imgBase64 };
  eventHandler.addProductImgBase64(newProductBase64RequestModel);
};
  return (
    <div className="App">

    <form itemID="form1">

      <h1>Create a new Event</h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input name="name" type="text" className="form-control" placeholder="Event name" onChange={handleNameChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input name="description" type="text"  className="form-control" placeholder="Event description" onChange={handleDescriptionChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="imgBase64" className="form-label">Image Base 64</label>
        <input name="imgBase64" type="file" className="form-control" placeholder="Upload a picture" onChange={handleImgBase64Change} required />
      </div>
      <button onClick={handleSubmitBase64} className="btn btn-primary" id="btn">Upload con img en Base 64</button>

      

    </form >

   <Images/>

  </div >

)
}

export default App;