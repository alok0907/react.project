import './App.css';

import { NavigationBar } from './components/navbar';
import { Slides } from './components/slides';
import { Info } from './components/info';
import { Products } from './components/products';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Slides />   
      <Info />   
      <Products />
      <Footer />
    </div>
  );
}

export default App;
