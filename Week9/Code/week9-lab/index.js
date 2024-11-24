import React from 'react';
import ReactDOM from 'react-dom/client';

// Import my class components
import FacebookEmojiCounter from './FacebookEmojis';
import ToggleMode from './ToggleModeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookEmojiCounter type="Like"/>
    <FacebookEmojiCounter type="Love"/>
    <FacebookEmojiCounter type="Happy"/>
    <ToggleMode/>
  </React.StrictMode>
);