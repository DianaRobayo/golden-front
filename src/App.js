import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <header>
        <AppRouter />        
      </header>
    </div>
  );
}

export default App;
