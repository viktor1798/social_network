import './App.css';
import Header from './components/header/header';
import MainBlock from './components/mainblock/mainblock';



const App = () => {
  return (       
     <div className="container">
        <Header />
        <MainBlock />
      </div>    
  );
}

export default App;