import React from 'react';
import '../App.css';

const LabelParcial = (props) => 
    {
        return(
            <>
                {props.items.map((item, index) => (
                <tr>{item}</tr>
                ))}
            </>
        )
    }

export default LabelParcial