import React, {useState} from 'react'
import Btn from './Btn'
import Label from './Label'

function AddTarefa(){
    let tf
    const [tarefa, setTarefa] = useState('')
    const Add = (e) =>{
        const tf = e.target.value
        setTarefa(tf)
    }
    const AddTf = () =>{
        
    }

    return(
        <div>
            <Label tarefa="Tarefas"></Label>
            <input name="tarefa" onChange={Add} type="text"/>
            <Btn onClick={AddTf}  value="Adicionar"></Btn>
            <Label tarefa={tarefa}/>
        </div>
    )
}
export default AddTarefa