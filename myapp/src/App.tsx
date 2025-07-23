import './App.css';
import Button from './components/Button';

function App() {

  return (
    <div className="container">
      <Button children='Valider' color='danger' onClick={() => console.log('toto\n')}/>
    </div>
  )
}

export default App;
