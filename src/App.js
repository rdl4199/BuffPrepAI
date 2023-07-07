import './App.css';
import NavBar from './NavBar';
import kidsLearningimg from "./kids learning.jpeg";
import Body from './Body';
import Footer from './Footer';
import LeftNavBar from './LeftNavBar';
// import AboutUs from './AboutUs';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <div className="Home--mainImg">
            <img alt="" src={kidsLearningimg}/>
          </div>
          <LeftNavBar />
          <div className='Home--welcome'>
            <h1>Welcome to Prep AI!</h1>
            <p>Prep AI is a tool  made for Buffalo Prep in order to enhance learning. </p>
          </div>
          <Body />
          <Footer />
        </header>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>

  );
}

export default App;
