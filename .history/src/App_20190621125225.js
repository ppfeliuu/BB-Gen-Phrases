import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [ frase, obtenerFrase ] = useState({});

  // console.log(frase);

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    console.log(resultado.data[0]);

    //agregar resultado al STATE
  }
  // Consulta Rest API

  useEffect(
    () => {
    consultarAPI();
    }
  )

  console.log(frase);
  return <p>Hi</p>
}

export default App;