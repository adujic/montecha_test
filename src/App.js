
import './App.css';
import Home from './components/Home'
import Search from './components/Search'
import About from './components/About'
import { BrowserRouter,
  Routes,
  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-tab" >Montecha test</div>
        <div className="App-tab">          
          <a href="/" className="App-link">Home</a>
        </div>
        <div className="App-tab">          
          <a href="/search" className="App-link">Search</a>
        </div>
      </header>
      
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="/about/:id" element={<Search />} component={About}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
