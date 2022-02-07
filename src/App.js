import './App.css';

import { NavigationBar } from './components/navbar';
import { Goods } from './components/goods';
import { Slides } from './components/slides';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Slides />      
      <Goods />
    </div>
  );
}

export default App;
