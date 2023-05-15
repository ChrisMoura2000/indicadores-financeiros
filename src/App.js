import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/Header'
import StocksAndBusiness from './components/StocksAndBusiness';

function App() {
  return (
    <div className="App">
      <Header/>
      <StocksAndBusiness/>
    </div>
  );
}

export default App;
