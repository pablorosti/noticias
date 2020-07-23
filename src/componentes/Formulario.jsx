import React from 'react';
import styled from '@emotion/styled';
import useSelect from '../hooks/useSelect';

const Form = styled.form`
    padding:0 1rem;
`;
const Titulo = styled.h2`
    text-align:center;
    margin-top:1rem;
    text-transform:uppercase;
    font-weight:bold;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Boton = styled.input`
    padding:10px;
    color:black;
    background: lightsteelblue;
    border:none;
    border-radius:10px;
    text-transform:uppercase;
    width:100%;
    cursor: pointer;
    font-weight:bold;
    margin-top:1rem;
`;

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sport', label:'Deportes'}, 
        {value:'technology', label:'Tecnología'}
    ];

    //Utilizamos los custom hooks
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form, pasar categoria a app.js
    const buscarNoticia = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div>
            <Form onSubmit={buscarNoticia}>
                <Titulo>Encuentra noticias por categoria</Titulo>
                <SelectNoticias/>
                <Boton 
                    type="submit"
                    value='buscar'
                />
            </Form>
        </div>
    );
}

export default Formulario;