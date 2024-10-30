// Exercise 3

// Import CSS file 
import './App.css';

// Create new React component of HTML elements
function GreetingElement()
{
    const greeting = 'Hello Function Component';
    return (
        <div className="App">
            <h1>{greeting}</h1>
        </div>
    );
};

// Export the component for use in another file
export default GreetingElement;