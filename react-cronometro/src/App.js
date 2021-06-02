import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import LabelCronometro from './components/LabelCronometro';
import Hours from './components/Hours'

function App() {
  return (
    <div className="App">
      <LabelCronometro name="Cronometro"/>
      <Hours/>
    </div>
  );
}

export default App;
