import { connect } from 'react-redux';
import App from './App';



let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}


let AppContainer = connect(mapStateToProps)(App)

export default AppContainer; 