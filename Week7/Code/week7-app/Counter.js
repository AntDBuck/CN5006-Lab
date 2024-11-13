// Task 1

// Import useState from the React libaray
import {useState} from 'react';

// Component that uses the useState method and returns a form
function HookControlledButtonState()
{
    // Declare state variable and state updater function. State is initialised as 0
    const [count, setCount] = useState(0);

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
        fontFamily: 'arial',
        backgroundColor: '#8ae',
        padding: 30,
    };

    //CSS object for styling of button
    const buttonStyle =
    {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightgreen',
        fontWeight: 'bold',
        fontSize: 15
    };

    // Return form
    // Button calls the event handler function and updates the count state
    return(
        <div style={divStyle}>
            <form>
                <h1>Click counts are: {count}</h1>
                <button type="button" style={buttonStyle} onClick={clickHandle}>
                    Click me: {count}
                </button>
            </form>
        </div>
    );
};

// Export component for use in index.js
export default HookControlledButtonState;