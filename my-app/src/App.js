import './App.css';
import Header from './components/header/header';
import MainBlock from './components/mainblock/mainblock';
import {BrowserRouter} from "react-router-dom";



const App = () => {
  return (  
    <BrowserRouter>     
     <div className="container">
        <Header />
        <MainBlock/>
      </div>    
    </BrowserRouter>
  );
}

export default App;