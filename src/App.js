import './App.css';
import NavBar from './NavBar';
import kidsLearningimg from "./kids learning.jpeg";
import Body from './Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="Home--mainImg">
          <img alt="" src={kidsLearningimg}/>
        </div>
        <div className='Home--welcome'>
          <h1>Welcome!</h1>
          <p>Prep AI is a tool  made for Buffalo Prep in order to enhance learning. </p>
        </div>
        <Body />
      </header>
    </div>
  );
}

export default App;
