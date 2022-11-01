import logo from './museum.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Leonard Family Bookstore</h2>
        <p>
          We share holidays 🦃 interests 🌱 and books 📚!
        </p>
        <div>
          <p>Total inventory: 989 books</p>
        </div>
        <button>Checkout</button>
      </header>
    </div>
  );
}

export default App;
