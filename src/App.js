import './App.css';
import Photos from './components/Photos/Photos';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Product name='Laptop' price='120000'></Product>
      <Product name='Mobile' price='50000'></Product>
      <Product name='Tablet' price='40000'></Product>
      <Product name='Watch' price='10000'></Product>
      <Photos></Photos>
    </div>
  );
}

export default App;
