import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




let messageData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Go dota2' },
  { id: 3, message: 'or go to run' },
  { id: 4, message: 'FY' },
  { id: 5, message: 'test' }
]
let dialogUserData =[
  {id:1, name:'Victor'},
  {id:2, name:'Lesha'},
  {id:3, name:'Kolya'},
  {id:4, name:'Evdokia'}
]
let postData =[
  {id:1, message:'Привет всем', likesCount:20},
  {id:2, message:'Кто,Я?', likesCount:22}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App postData={postData} messageData={messageData} dialogUserData={dialogUserData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
