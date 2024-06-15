import React from 'react'
import jsPDF from 'jspdf'
import img from '../../public/tampon.jpg'

const ActeDecesPdf = (props) => {
    const generatePDF = () => {
        const pageWidth = 180;
        const pageHeight = 200; 
        
        const doc = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

        const paragraph1 = `
        République de Madagscar \n 
        ****************** \n 
        Fitiavana - Tanindrazana - Fandroasoana \n
        Acte de décès \n \n \n
        ` 

        const commune = "Commune Urbaine de " + props.lieu
        const prix = "Droit : 3000 Ariary"

        const paragraph2 = "Le maire de la commune " + props.lieu + "confirme la déclaration \n du décès de la "+
        "personne nommée " + props.nom + " " + props.prenom + " \n résident à " + props.adresse + " le " +props.date +  ". "+
        "Le rapport de la mort s'est fait par \n le membre de sa famille même."

        const paragraph3 = "Cette acte de décès qui déclare la mort de la personne \n mentionée est libre " +
        "à toutes situations que la \n famille  poura en besoin."

        var xOffset = doc.internal.pageSize.width / 2;
        doc.setFontSize(12);
        doc.text(paragraph1, xOffset, 0, {align : 'center'})
        
        doc.text(commune, 20, 55);
        
        doc.text(prix, 20, 60)
        
        doc.text(paragraph2, 100, 100, {align :'center'});
        
        doc.text(paragraph3, 100, 120, {align : 'center'})

        doc.addImage(img, 'jpg', 140, 150, 35, 35)
        
        doc.save("acte_de_deces.pdf")

    }

    return(
        <div>
            <button type="submit" class="mt-5 btn-center" onClick={generatePDF}>Envoyer</button>
        </div>
    )
}

export default ActeDecesPdf;