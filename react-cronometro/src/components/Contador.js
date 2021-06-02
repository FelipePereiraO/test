import React, {useState, useEffect} from 'react'
import LabelCronometro from './LabelCronometro'
import  Botao  from  './Botao'
import LabelParcial from './LabelParcial'

const Contador = (props) => {
    const [stop, setStop] = useState(false)
    const [nameStop, setNameStop] = useState("Stop")

    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    
    const [parcial, setParcial] = useState([])
    const incrementar = () => {   
        if(stop==false){
            setSegundos(segundos+1)
        }
    }
    const pararTempo = () =>{
        setStop(!stop)
        if(stop){
            setNameStop("Pause")
        }else{
            setNameStop("Play")
        }
    }
    const parciais = () =>{
        let p = minutos + ":" + segundos
        setParcial([...parcial, p])
    }
    const zerarSegundos = () => {
        setSegundos(0)
    }
    const incrementarMinutos = () => {
        setMinutos(minutos + 1)
    }

    const zerarCronometro = () => {
        setSegundos(0)
        setMinutos(0)
    }
    
    
    
    useEffect(() => {
        let id = setInterval(() => {
            incrementar()
        }, 1000)
        return () => clearInterval(id);   
    })
    useEffect(() => {
        if (segundos >= 5){
            zerarSegundos()
            incrementarMinutos()
        }
    }, [segundos])

    return(
            <div>
                <LabelCronometro name={minutos+":"+segundos}/>
                <Botao onClick={zerarCronometro} label={"Zerar"}></Botao>
                <Botao onClick={pararTempo} label={nameStop}></Botao>
                <Botao onClick={parciais} label={"Parcial"}></Botao>
                <LabelParcial items={parcial}></LabelParcial>
            </div>
        )
}
export default Contador
