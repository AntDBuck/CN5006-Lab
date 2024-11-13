import React from 'react';
import ReactDOM from 'react-dom/client';
// Import my components
import HookControlledButtonState from './Counter';
import EmojiCounter from './EmojiCounter';
import TextBoxEmoji from './TextBoxEmoji';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render my components
root.render(
  <React.StrictMode>
    <HookControlledButtonState/>
    <EmojiCounter pic='Love'/>
    <EmojiCounter pic='Like'/>
    <EmojiCounter pic='Sad'/>
    <TextBoxEmoji/>
  </React.StrictMode>
);