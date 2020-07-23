import React, {Fragment} from 'react';
import Noticia from './Noticias';
import styled from '@emotion/styled';

const Grid = styled.div`
    @media (min-width:480px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        grid-gap:10px;
        margin:2rem 2rem auto 2rem;
    }
    @media (min-width:768px){
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:10px;
    }
    
`;

const ListadoNoticias = ({noticias}) => (
    <Grid>
        {noticias.map(noticia => (
            <Noticia
                key={noticia.url}
                noticia={noticia}
            />
            
        ))}
    </Grid>
)
 
export default ListadoNoticias;