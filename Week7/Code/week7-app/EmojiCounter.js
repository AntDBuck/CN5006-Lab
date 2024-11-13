// Task 2

// Import useState and useEffect from the React libaray
import {useState, useEffect} from 'react';

// Import images from emojis folder
import Love from './emojis/love.png';
import Like from './emojis/like.png';
import Sad from './emojis/sad.png';

// Component that uses props, useState, and useEffect to return image counters 
function EmojiCounter(props)
{
    console.log('Picture is ', props.pic);

    // Declare state variable and state updater function. State is initialised as 'Love' image
    const [pic, setPic] = useState(Love);
    // Declare state variable and state updater function. State is initialised as 0
    const [count, setCount] = useState(0);

    // Set 'pic' state to respective image when 'props.pic' changes
    useEffect(() =>
    {
        console.log('Function called ', props.pic);
        if (props.pic === 'Love')
        {
            setPic(Love);
        }
        else if (props.pic === 'Like')
        {
            setPic(Like);
        }
        else if (props.pic === 'Sad')
        {
            setPic(Sad);
        }
    }, [props.pic]);

    // Event handler function that increments count state by 1 when called
    const clickHandle = () =>
    {
        // Increment count by 1
        setCount(count + 1);
    };

    // CSS object for styling of div
    const divStyle =
    {
        textAlign: 'center',
        padding: 1,
        backgroundColor: '#6ca',
        fontFamily: 'arial',
        fontSize: 20
    };

    const buttonStyle =
    {
        borderRadius: 10,
        padding: 5
    };

    // Return text and button image that calls event handler function
    return(
        <div style={divStyle}>
            <p>
                {props.pic}:
                <button style={buttonStyle} onClick={clickHandle}>{count}<img src={pic} alt=''/></button>
            </p>
        </div>
    );
};

// Export component for use in index.js
export default EmojiCounter;