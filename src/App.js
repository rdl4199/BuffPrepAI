import './App.css';
import NavBar from './NavBar';
import kidsLearningimg from "./kids learning.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="Home--mainImg">
          <img alt="" src={kidsLearningimg}/>
        </div>
      </header>
    </div>
  );
}

export default App;
