import './App.css';
import Mensaje from './Mensaje';


const App = () => {
  return (
    <div className="App">
      < Mensaje color='blue' message='Estamos trabajando en' />
      < Mensaje color='pink' message='un curso de React'/>
    </div>
  );
}

export default App;
