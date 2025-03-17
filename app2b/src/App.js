import './App.css';
import Boton from './components/boton';
import Accordion from './components/accordion';
import Alert from './components/alert';
import Badge from './components/badge';
import Bread from './components/breadcrumb';

function App() {
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <Boton nombre="botoooonnn"/>
      <Accordion/>
      <Alert/>
      <Badge/>
      <Bread/>
    </div>
  );
}

export default App;
