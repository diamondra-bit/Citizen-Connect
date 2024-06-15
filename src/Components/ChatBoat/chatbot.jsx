import ChatBot from 'react-simple-chatbot';
import React from 'react'
import {ThemeProvider} from "styled-components"
import { useState } from 'react';

const theme = {
  background : 'white',
  fontFamily : 'Helvetica Neue',
  headerBgColor : 'green',
  headerFontColor : 'black',
  headerFontSize : '15px',
  botBubbleColor : 'red',
  botFontColor : "black",
  userBubbleColor : 'red',
  userFontColor : 'black'
}

function Chat() {

  const [chatKey, setChatKey] = useState(0);

  const step = [
    {
      id : '1',
      message : 'Bienvenue ! Fait votre choix',
      trigger : '2',
    },
    {
      id : '2',
      options : [
        {value: 'creationCompte', label : 'Créer un compte', trigger : '6'},
        {value: 'acte', label : 'Faire un acte d\'état civil', trigger : '3'},
        {value: 'impot', label : 'Payer mes impôts', trigger : '4'},
        {vamue: 'diplomeBac', label : 'Demander un diplôme bac', trigger : '5'}
      ]
    },
    {
      id : '3',
      message : 'Vous pouvez télécharger votre acte de naissance, acte de mariage ou prendre l\'acte de décès d\'une personne dans cette séction',
      trigger : '7'
    },
    {
      id : '4',
      message : 'Dans la section impôt, vous pouvez faire une déclaration de votre revenue et vous obtiendrez une somme que vous devez payer',
      trigger : '7',
    },
    {
      id : '5',
      message : 'Vous aurez un diplôme déjà légalisé à votre nom',
      trigger : '7',
    },
    {
      id : '6',
      message : 'Pour créer un compte, choississez une séction et vous trouverez une formulaire. Bonne chance!!',
      trigger : '7',
    },
    {
      id : '7',
      options : [
        {value : "oui", label : "Autres questions ?", trigger : '2'},
        {value : "non", label : "Commencer votre expérience ?", trigger : '8'}
      ]
    },
    {
      id : '8',
      message : 'Merci beaucoup cher utilisateur !',
      end : true
    }
  ]

  const resetChatbot = () => {
    setChatKey(prevKey => prevKey + 1);
  };

  return (
    <div>

        <ChatBot 
            key={chatKey}
            steps = {step}
            floating = {true}
            botDelay = {1000}
            headerTitle = "Cityzen bot "
        />
    </div>
  )
}

export default Chat;
