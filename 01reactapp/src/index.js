import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const reactElement = React.createElement(
  'a',
  {
    href : "https://www.google.com",
    target : "_blank"
  },
  "Click me to Visit Google"
)

const anotherElement = (
<a href='https://amazon.in' target='_blank'>Click me to visit Amazon.in</a>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <>
    <App />
    <hr/>
    {reactElement} <br/>
    {anotherElement}
    </>

  </React.StrictMode>
);