import React, {useState} from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
    width:100%;
    padding:.5rem;
    border:none;
    border-radius:10px;
    margin-top:10px;
`;

const useSelect = (stateInicial, opciones) => {
    
    const [state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <Select value={state} onChange={e => actualizarState(e.target.value)}>

            {opciones.map(opcion =>(
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
            
        </Select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;