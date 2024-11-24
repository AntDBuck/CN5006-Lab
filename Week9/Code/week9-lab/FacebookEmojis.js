// Task 1:

import React from 'react';

// Import my CSS styling
import './EmojiStyle.css';

// Import emoji pictures 
import Like from './emojis/like.png';
import Love from './emojis/love.png';
import Happy from './emojis/happy.png';

// Class component that manages counter state for an emoji button
class FacebookEmojiCounter extends React.Component
{
    // Set inital props and states
    constructor(props)
    {
        super(props);
        this.state = {number: 0};
        this.increment = this.increment.bind(this);
        this.pic = null;

        // If property type is certain string then set object's picture to matching string
        if (this.props.type === 'Like') this.pic = Like;
        else if (this.props.type === 'Love') this.pic = Love;
        else if (this.props.type === 'Happy') this.pic = Happy;
    }

    // Increment method that updates state using the setState method
    increment()
    {
        this.setState((prevState) =>
        {
            // Increment previous state by 1
            return {number: prevState.number + 1};
        });
    }

    // Class component requires render method
    render()
    {
        // Return React code
        // Button calls increment method which updates the state
        return(
            <div>
                <h5>There are {this.state.number} {this.props.type}(s).</h5>
                <button onClick={this.increment}>
                    <img src={this.pic} alt=''/>
                    <b>{this.state.number}</b>
                </button>
            </div>
        );
    }
}

// Export class component
export default FacebookEmojiCounter;