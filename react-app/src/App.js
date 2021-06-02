import './App.css';
import React from 'react'
//importando componente TodoList
import TodoList from './TodoList'
class App extends React.Component {
  //contrutor do component class
  constructor(props) {
    //chamada ao costrutos da classe super class
    super(props);
    //local onde eu crio os meus states
    //criando o state items (lista de objetos)
    this.state = {text: "", items: [{
      id: 1,
      text: 'Item 1'
    }, {
      id: 2,
      text: 'Item 2'
    }, {
      id: 3,
      text: 'Item 3'
    }]};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    if(this.state.text.length === 0) return
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state =>({
      items: state.items.concat(newItem),
      text: ""
    }))
  }
  handleChange(e){
    this.setState({text: e.target.value})
  }
  //método obrigtório responsável por renderizar meu componente
  render() {
    //responsél por retornar o html
    return (
      <div>
        <h3>Tarefas</h3>
        {/* utlizando o compoenete TodoList 
            passando state items via props (parâmetros) */}
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label>O que precisa ser feito?</label>
          <label>{this.state.text}</label>
          <input id="new todo" type="text" onChange={this.handleChange}
          value={this.state.text}
          />
          <button>Adicionar #{this.state.items.lenght + 1}</button>
        </form>
      </div>
    );
  }
}
export default App;