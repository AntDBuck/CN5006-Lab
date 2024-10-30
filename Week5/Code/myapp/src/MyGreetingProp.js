// Exercise 4:

// Import CSS file
import './App.css';

// Create new functional compoenet with one prop
function GreetingElementWithProp(props)
{
    const greeting = 'Hello, lets start learning function component...';
    console.log('Prop is ', props.msg);
    return (
        <div className="App">
            <h1>{props.msg}</h1>
        </div>
    );
};

// Export the component for use in another file
export default GreetingElementWithProp;