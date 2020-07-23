import React, {Fragment, useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario'
import ListadoNoticias from './componentes/ListadoNoticias'

const Contenedor = styled.div`
  max-width:700px;
  margin: 0 auto;
`;

function App() {

  //Definir la categoria y la noticia
  const [categoria, guardarCategoria] = useState('');

  const [noticias, guardarNoticias] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=4899d3031d474feea731c1cc1b3e2220`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header/>

      <Contenedor>

        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </Contenedor>
    </Fragment>
  );
}

export default App;
