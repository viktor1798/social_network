import './App.css';
import Header from './components/header/header';
import MainBlock from './components/mainblock/mainblock';
import {BrowserRouter} from "react-router-dom";



const App = (props) => {
  return (  
    <BrowserRouter>     
     <div className="container">
        <Header />
        <MainBlock postData={props.postData} dialogUserData={props.dialogUserData} messageData={props.messageData}/>
      </div>    
    </BrowserRouter>
  );
}

export default App;