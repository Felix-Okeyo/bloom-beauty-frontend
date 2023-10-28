import './App.css';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Checkout name="Product A" price="100.00" sizes={["XS", "S", "M", "L", "XL"]} />
      <Checkout name="Product B" price="120.00" sizes={["XS", "S", "M", "L", "XL"]} />
    </div>
  );
}

export default App;
