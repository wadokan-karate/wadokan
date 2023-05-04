import { useState } from 'react'
 import jsPDF from 'jspdf'
 import html2canvas from 'html2canvas'

 import './App.css'
 function Pdf() {
   const [shouldDownload, setShouldDownload] = useState(false)

   function handleDownload() {
     setShouldDownload(true)
   }

   function downloadPDF() {
     const input = document.getElementById('to-pdf')
     html2canvas(input).then((canvas) => {
       const imgData = canvas.toDataURL('image/png')
       const pdf = new jsPDF()
       pdf.addImage(imgData, 'PNG', 0, 0)
       pdf.save('web.pdf')
       setShouldDownload(false)
     })
   }

   if (shouldDownload) {
     downloadPDF()
   }
   return (
     <>
       <div id="to-pdf" style={{ width: '800px', height: '600px' }}>

         <img src="/imagen.png" alt="Descripción de la imagen" />
       </div>
       <div>
         <button onClick={handleDownload}>Descargar PDF</button>
       </div>
     </>
   )
 }

export default Pdf
