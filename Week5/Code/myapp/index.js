import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import my created components
import GreetingElement from './MyGreetingApp';
import GreetingElementWithProp from './MyGreetingProp';
import AppColours from './AppBackgroundColour';
import SumOfNumbers from './AddTwoNumbers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GreetingElementWithProp msg="Hi, it is Monday"/>
    <GreetingElementWithProp msg="Hi, it is Tuesday"/>
    <GreetingElementWithProp msg="Hi, it is Wednesday"/>
    <GreetingElementWithProp msg="Hi, it is Thursday"/>
    <GreetingElementWithProp msg="Hi, it is Friday"/>
    <GreetingElementWithProp msg="Hi, it is Saturday"/>
    <GreetingElementWithProp msg="Hi, it is Sunday"/>

    <AppColours heading="This is the first element" lbl="Name: " color="green"/>
    <AppColours heading="This is the second element" lbl="Name: " color="blue"/>
    <AppColours heading="This is the third element" lbl="Name: " color="yellow"/>

    <SumOfNumbers num1="30" num2="70"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();