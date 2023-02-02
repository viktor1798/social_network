import './App.css';
import Header from './components/header/header';
import MainBlock from './components/mainblock/mainblock';



const App = (props) => {
  return (       
     <div className="container">
        <Header />
        <MainBlock 
          state={props.state}
          dispatch={props.dispatch}/>
      </div>    
  );
}

export default App;