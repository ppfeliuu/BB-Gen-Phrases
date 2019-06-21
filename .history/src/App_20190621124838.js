import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [ frase, obtenerFrase ] = useState({});

  // console.log(frase);

  // Consulta Rest API

  useEffect(
    async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

      console.log(resultado);
    }
  )

  return <p>Hi</p>
}

export default App;