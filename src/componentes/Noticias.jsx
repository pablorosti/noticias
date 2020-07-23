import React from 'react';
import styled from '@emotion/styled';

const Caja = styled.div`
    border: solid 1px black;
    background:white;
    margin:2rem auto auto auto;

    img{
        width:100%;
    }
    h4{
        text-transform:uppercase;
        padding:0 10px;
    }
    p{
        margin:10px 0;
        padding:10px;
        text-align:left;
    }
    a{
        display:block;
        border-top:solid 1px black;
        padding:10px;
        text-decoration:none;
        text-transform:uppercase;
        color: orange;
        background:lightsalmon;
        color:white;
        font-weight:bold;
    }
`;

const Noticias = ({noticia}) => {

    //Extraer los datos
    const {urlToImage, url, title, description} = noticia;
    return (
            <Caja>
                <img src={urlToImage} alt="imagen noticia"/>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={url}>Ver noticia completa</a>
            </Caja>
    );
}
 
export default Noticias;