import React from 'react'

function Btn(props){
    return(
        <button onClick={props.onClick}>{props.value}</button>
    )
}
export default Btn