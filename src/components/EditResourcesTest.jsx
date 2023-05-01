import '../style/editView.css'


const EditResourcesTest = () => {

  const {id} = useParams();
  const [resource, setResource] = useState({});

useEffect(() => {
  async function fetchResource() {
    const resourceData = await resourceHandler.loadResource(id);
    setResource(resourceData);
  }
  fetchResource();
}, [id]);

  const [name, setName] = useState(resource.name || '');
  const [description, setDescription] = useState(resource.description || '');
  const [video, setVideo] = useState(resource.video || '');
  const [image, setImage] = useState(resource.image || '');

useEffect(() => {
  
  if (name === '') {
    setName(resource.name || '');
  }
  if (description === '') {
    setDescription(resource.description || '');
  }
  if (video === '') {
    setVideo(resource.video || '');
  }
  if (image === '') {
    setImage(resource.image || '');
  }
}, [resource.id, resource.name, resource.description, resource.video, resource.image]);


  const handleImageChange = (event) => {
    const pictureResource = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(pictureResource);
    console.log(pictureResource)
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      console.log(base64String);
      setImage(base64String);
      };console.log(pictureResource)
    };
  
          

  const handleNameChange = (event) => {
      let nameInput = event.target.value;
      setName(nameInput);
  };

  const handleDescriptionChange = (event) => {
    let descriptionInput = event.target.value;
    setDescription(descriptionInput);
};

  const handleVideoChange = (event) => {
  let videoInput = event.target.value;
  setVideo(videoInput);
};


    const handleSubmit = async (event) => {
    event.preventDefault();
      
    const updatedResource = { id, name, description , video, image};
    console.log(updatedResource)

    

    await resourceHandler.updateResource(id, updatedResource);
    setShowAlert(true);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleAddClick = () => {
      setShowAlert(true);
  }

  const handleAlertClose = () => {
      setShowAlert(false);
  }

  const [view, setView] = useState(false);

  const handleClose = () => setView(false);
  const handleView = () => setView(true);

  const [alertVariant, setAlertVariant] = useState("success");
const [alertMessage, setAlertMessage] = useState("");

  if (!resource) {
      return <div>Loading...</div>;
    }
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Edita tus recursos</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Aqui puedes modificar cualquier apartado de recursos</p>
          <form onSubmit={handleSubmit} className="form space-y-8">
            <div>
              <label for='name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Título del recurso</label>
              <input onChange={handleNameChange} placeholder={resource.name} id="name" type="text"  name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
            </div>

            <div>
              
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción<noframes></noframes></label>
              <textarea onChange={handleDescriptionChange} placeholder={resource.description} id="description"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

            </div>

            <div>
              <label htmlFor="pictureResource" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Foto</label>
              <input id="pictureResource" type="file" onChange={handleImageChange} name="pictureResource" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
            </div>

            <div id='buttons' style={{display:'flex', flexDirection: 'row'}}>
              <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
              <Link to="/admin/noticias" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
          </div>

          <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} style={{backgroundColor: '#2196F3', marginTop:'2vh'}} dismissible>
      <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Recurso actualizado en la base de datos' : 'Error'}</Alert.Heading>
      <p style={{ color: 'white' }}>
        {alertMessage}
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button style={{ height: '5vh', fontFamily: 'Jmh', width: '5vw', backgroundColor: 'white', fontFamily: 'Montserrat', color: '#2196F3' }} onClick={handleAlertClose} variant="outline-success">
          Cerrar
        </Button>
      </div>
      
    </Alert>
          </form>
        </div>
      </section>
    );
  };
  export default EditResourcesTest;