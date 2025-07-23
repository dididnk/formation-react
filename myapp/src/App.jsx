import './App.css';
import ListGroup from './components/ListGroup';

function App() {
  let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div className="container">
      <ListGroup items={cities} heading='Cities'/>
    </div>
  )
}

export default App;
