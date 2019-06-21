import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Frase({frase}) {
  return(
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>

  )
}

function App() {

  const [ frase, obtenerFrase ] = useState({});

  // console.log(frase);

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    console.log(resultado.data[0]);

    //agregar resultado al STATE
    obtenerFrase(resultado.data[0])

  }
  // Consulta Rest API

  useEffect(
    () => {
    consultarAPI();
    }, []
  )

  // console.log(frase);
  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />
    </div>
  )
}

export default App;