import React from 'react'
import  LabelParcial  from  './LabelParcial'
import { useState } from 'react'

const Botao = (props) => {

    return(
        <button onClick={props.onClick}>{props.label}</button>
    )
}
export default Botao
