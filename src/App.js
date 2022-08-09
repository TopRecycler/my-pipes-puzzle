import logoPipez from './logoPipez.png';
import './App.css';
import Header from './components/Header';
import GridArray from './components/GridArray';


function App() {
  return (
    <div className="App">
      <Header logo={logoPipez}></Header>
      <GridArray size={1}></GridArray>
    </div>
  );
}

export default App;
