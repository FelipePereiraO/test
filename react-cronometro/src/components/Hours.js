import React, {useState, useEffect} from 'react'
import LabelCronometro from './LabelCronometro'
import  Botao  from  './Botao'
import LabelParcial from './LabelParcial'

const Hours = (props) => {

    const [contador, setContador] = useState(0)
    
    let data = new Date
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds() 


    useEffect(() => {
        let id = setInterval(() => {
            setContador(contador+1)
        }, 1000)
        return () => clearInterval(id);   
    })


    return(
        <div className="painel">
            <div className="horas">
                <LabelCronometro name={hora+":"+minuto+":"+segundo}/>
            </div>


                
        </div>
        )
}
export default Hours
