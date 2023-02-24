import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/header/headerContainer";
import MainBlock from "./components/mainblock/mainblock";
import Login from "./components/mainblock/login/login";

const App = (props) => {
  if (!props.isAuth)
    return (
      <div className="container">
        <HeaderContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  return (
    <div className="container">
      <HeaderContainer />
      <MainBlock />
    </div>
  );
};

export default App;
