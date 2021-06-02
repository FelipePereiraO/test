import React, {useState, useEffect} from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'
import LabelParcial from './LabelParcial'
const Contador = (props) => {
    const [segundos, setSegundos] = useState(59)
    const [minutos, setMinutos] = useState(59)
    const [stop, setStop] = useState(true)
    const [nameStop, setNameStop] = useState("Play")
    const [parcial, setParcial] = useState([])
    const InputMinuto = (e) =>{
        let min = e.target.value
        if(min >= 60 || min <= -1){
            setMinutos(0)
            e.target.value = 0
            alert("Limite é de 0 a 59 minutos!")
        }else{
            setMinutos(min)
        }
        
    }
    const InputSegundos = (e) =>{
        let seg = e.target.value
        if(seg >= 60 || seg <= -1){
            setSegundos(0)
            e.target.value = 0
            alert("Limite é de 0 a 59 segundos!")
        }else{
            setSegundos(seg)
        }
    }
    const incrementar = () => {   
        if(stop==false){
            setSegundos(segundos - 1)
        }
    }
    const zerar = () => {
        setSegundos(59)
    }
    const incrementarMinutos = () => {
        setMinutos(minutos - 1)
    }
    const zerarCronometro = (props) => {
        setSegundos(59)
        setMinutos(59)
        setParcial([])
    }
    const pararTempo = () => {
        setStop(!stop)
        if(stop)
        {
            setNameStop("Stop")
        }else
        {
            setNameStop("Play")
        } 
    }
    const parciais = () => {
        let p = minutos + ":" + segundos
        setParcial([...parcial, p])
    }
    useEffect(() => {
        if (segundos <= -1){
            zerar()
            incrementarMinutos()
        }
    }, [segundos])
    useEffect(() =>{
        if(minutos == 0 && segundos == 0){
            setSegundos(0)
            setMinutos(0)
            alert("Fim!")
            setStop(true)
        }
    }, [segundos, minutos])
    useEffect(() => {
        let id = setInterval(() => {
            incrementar()
        }, 1000)
        return () => clearInterval(id);   
    })



    return(
            <div className="painel">
                <div className="cronometro">
                    <LabelCronometro name={minutos+":"+segundos}/>
                </div>
                <h3 className="res"></h3>
                <div className="dados">
                    <label>Minutos</label>
                    <input type="number" onChange={InputMinuto} />
                    <label>Segundos</label>
                    <input type="number" onChange={InputSegundos} />
                    <Botao onClick={() => {zerarCronometro()}} label="Zerar" />
                    <Botao onClick={() => {pararTempo()}} label={nameStop} />
                    <Botao onClick={() => {parciais()}} label="Parcial" />
                </div>
                    <table border="1">
                        <tr>
                            <td>PARCIAL</td>
                        </tr>
                        <LabelParcial items={parcial}/>

                    </table>
                    
            </div>
        )
}
export default Contador