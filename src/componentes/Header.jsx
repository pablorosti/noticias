import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.h1`
    background:lightsalmon;
    padding:1rem;
    text-align:center;
    text-transform:capitalize;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:white;
`;

const Header = () => {
    return (
        <Titulo>Buscador de noticias</Titulo>
    );
}
 
export default Header;