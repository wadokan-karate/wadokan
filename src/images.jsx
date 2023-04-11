import { eventHandler } from './handlers/eventHandler';
import { useState } from 'react';

function Images() {

    let [imgsBase64Array, setImgsBase64Array] = useState([]);
    async function loadImgsBase64Array() {
        let loadedBase64Imgs = await eventHandler.loadProductsBase64Array();
        setImgsBase64Array(loadedBase64Imgs);
    }
    function buildImgSrcFromBase64Model(extension, content) {
        return "data:" + extension + ";base64," + content;
   }
   
    if (imgsBase64Array.length > 0 ) {

        return (
            <div>
                <button className="btn btn-primary" id="btn" onClick={loadImgsBase64Array}>Cargar Imagenes desde lista en Base64</button>
                {imgsBase64Array.map(img => (
                    <img key={imgsBase64Array.indexOf(img)} src={buildImgSrcFromBase64Model(img.extension, img.base64FileContent)} alt="sasasa" min-width="1000" min-height="1000" />
                ))}
            </div>
        )
    } else {

        return (
            <div>
                <button className="btn btn-primary" id="btn" onClick={loadImgsBase64Array}>Cargar Imagenes desde lista en base64</button>
</div>
        )
}
}
export default Images;