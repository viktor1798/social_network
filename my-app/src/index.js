import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let reranderAllTree=()=>{
root.render(
  <React.StrictMode>
    <App 
      state={store.getState()} 
      addPost={store.addPost.bind(store)} 
      updateTextarea={store.updateTextarea.bind(store)}
    />
  </React.StrictMode>
);
}
store.callbackToIndex(reranderAllTree);
reranderAllTree(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
