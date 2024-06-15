import React from 'react'
import jsPDF from 'jspdf'
import img from '../../public/tampon.jpg'

const ActeNaissPdf = (props) => {
    const generatePDF = () => {
        const pageWidth = 180;
        const pageHeight = 200; 

        
        
        
        const doc = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

        const paragraph1 = `
        République de Madagscar \n 
        ****************** \n 
        Fitiavana - Tanindrazana - Fandroasoana \n
        Acte de naissance \n \n \n
        ` 

        const commune = "Commune Urbaine de " + props.lieu_naiss
        const prix = "Droit : 3000 Ariary"



        const paragraph2 = "Le maire de la commune "+ props.lieu_naiss + " fait cette déclaration que \n" +
        props.nom + " " + props.prenom + " est né(e) le " + props.date_nais + "\n à " + props.lieu_naiss +" . " +
        " Fils(fille) de \n" + props.pere + ", " + props.profPere + " et de " +  props.mere + ", " + props.profMere + " .\n" +
        "Cette acte est redigée par la commune selon la déclaration du père \n de l'enfant."
        const paragraph3 = "Cette acte d'état civile qui déclare la naissance de la personne \n mentionée est libre " +
        "à toutes situations que le \n propriété ou les parents pouront en besoin."
        

        var xOffset = doc.internal.pageSize.width / 2;
        doc.setFontSize(12);
        doc.text(paragraph1, xOffset, 0, {align : 'center'})
        
        doc.text(commune, 20, 55);
        
        doc.text(prix, 20, 60)
        
        doc.text(paragraph2, 100, 100, {align :'center'});
        
        doc.text(paragraph3, 100, 130, {align : 'center'})

        doc.addImage(img, 'jpg', 140, 150, 35, 35)
        
        doc.save("acte_de_naissance.pdf")

    }

    return(
        <div>
             <button type="submit" class="mt-5 btn-center" onClick={generatePDF}>Envoyer</button>
        </div>
    )
}

export default ActeNaissPdf;