import app from "./app";
//import ReactDOM from 'react-dom'

const appElement = app();
const appPlaceHolder = document.getElementById('app')

appPlaceHolder.appendChild(appElement);
//ReactDOM.render(appElement, appPlaceHolder);