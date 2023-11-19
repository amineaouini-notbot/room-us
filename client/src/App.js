import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Room from './components/room';
import { socket } from '../src/socket';

function App() {
  return (
    <div className="App">
      <div className="app-container" >
        <Room></Room>
      </div>
    </div>
  );
}

export default App;
