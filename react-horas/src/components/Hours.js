import React, {useState, useEffect} from 'react'
import Label from './Label'
import  Botao  from  './Botao'
import LabelParcial from './LabelParcial'

const Hours = (props) => {
    const [count, setCount] = useState(0)
    const data = new Date
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds() 
    let horasUSA = data.getHours() + 17

    useEffect(() =>{
        if(horasUSA >= 24){
            horasUSA -= 24
        }else{
            
        }
    })

    useEffect(() =>{
        let id = setInterval(() => {
            setCount(count+1)
        }, 1000)
        return () => clearInterval(id);   
    })

    return(      
        <div className="hr">
            
            <Label name="Fuso Horário"/>
            <div className="br">
                
                <Label name={"Brasil"}/>
                <Label name={horas+":"+minutos+":"+segundos}/>  
            </div>
            <div className="hrs">
                <Label name={"EUA"}/>
                <Label name={(horas - 1) +":"+minutos+":"+segundos}/>    
            </div>
            <div className="hrs">
                <Label name={"China"}/>
                <Label name={horasUSA+":"+minutos+":"+segundos}/>    
            </div>
        </div>
    )
}
export default Hours
