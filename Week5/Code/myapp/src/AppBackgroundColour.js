// Exercise 6:

// Import CSS file
import './App.css';

// Create component that both alerts user with inputted name and changes the background colour
function AppColours(props)
{
    function GreetUser(e)
    {
        document.body.style.background = e.target.value;
        alert('Welcome Mr ' + document.getElementById(props.color).value);
    };

    return (
        <body style={{backgroundcolor:'powderblue', color:'black'}}>
            <div className='App'>
                <h1>{props.heading}</h1>
                <p style={{color:'blue', font:'30px Arial'}}>How to create function component</p>
                <label class='label' id='lbl'>{props.lbl}</label>
                <input id={props.color} type='text'/>
                <button value={props.color} onClick={GreetUser}>Colour me {props.color}</button>
            </div>
        </body>
    );
};

// Export component
export default AppColours;