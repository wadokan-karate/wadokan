import '../style/editView.css'


const EditOurTeam = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Edita nuestro equipo</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Aqui puedes cambiar a tu equipo</p>
          <form action="#" method="POST" className="space-y-8">
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre y apellidos</label>
              <input type="text" id="nameSurname" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Los Palacios, Montequinto" required />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Foto</label>
              <input type="file" id="resourcePicture" name="photo" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
            </div>

            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-wadokanBlue sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600">Guardar cambios</button>
  
          </form>
        </div>
      </section>
    );
  };
  export default EditOurTeam;