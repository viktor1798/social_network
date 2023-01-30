import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state, { callbackToIndex } from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost,updateTextarea } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let reranderAllTree=(state)=>{
root.render(
  
  <React.StrictMode>
    <App state={state} addPost={addPost} updateTextarea={updateTextarea}/>
  </React.StrictMode>
); }

callbackToIndex(reranderAllTree);

reranderAllTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
