// Task 2:

import React from "react";

// Import my CSS styling
import './EmojiStyle.css';

// Import emoji pictures 
import Happy from './emojis/happy.png';
import Sad from './emojis/sad.png';

// Class component that mananges picture state for a button
class ToggleMode extends React.Component
{
    // Set inital props and states
    constructor(props)
    {
        super(props);
        this.state = {pic: Happy};
        this.toggle = this.toggle.bind(this);
    }

    // Method to change state of picture 
    toggle()
    {
        this.setState((prevState) =>
        {
            // If pic's state = sad, then set pic's state to happy
            if (prevState.pic === Sad)
            {
                this.mode = 'Happy';
                return {pic: Happy};
            }
            // Else if pic's state = happy, then set pic's state to sad
            else if (prevState.pic === Happy)
            {
                this.mode = 'Sad';
                return {pic: Sad};
            }
        });
    }

    // Class component requires render method
    render()
    {
        // Return React code
        // Button calls toggle method which updates emoji image
        return(
            <div>
                <h3>Task 2 output: {this.mode}</h3>
                <button onClick={this.toggle}>
                    <img src={this.state.pic} alt=''/>
                </button>
            </div>
        );
    }
}

// Export class component
export default ToggleMode;