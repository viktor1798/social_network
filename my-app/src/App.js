import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/preloader";
import HeaderContainer from "./components/header/headerContainer";
import MainBlock from "./components/mainblock/mainblock";
import { initializeApp } from "./redux/appReduser";
import { withRouter } from "./utils/withRouter";

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp() 
  }
  
  
  render(){
    if(!this.props.initApp) return <Preloader/>

    return (
          <div className="container">
            <HeaderContainer />
            <MainBlock />
          </div>
        )
  }
}

const mapStateToProps=(state)=>({
  initApp: state.app.initApp
})


export default compose (
  withRouter,connect( mapStateToProps,{initializeApp}))(App);
