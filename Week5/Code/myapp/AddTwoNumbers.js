// Question 7:

import './App.css';

// Component takes two props and returns HTML elements
function SumOfNumbers(props)
{
    // Creates sum from prop values and displays result in alert box
    function AddNumbers()
    {
        const sum = Number(props.num1) + Number(props.num2);
        alert('The sum of ' + props.num1 + ' and ' + props.num2 + ' is ' + sum);
    };

    // Return HTML, button calls function
    return (
        <div className='App'>
            <h2 style={{color:'red'}}>Add Two Numbers With A Button:</h2>
            <p>{props.num1} + {props.num2} = <button onClick={AddNumbers}>Sum</button></p>
            <br/><br/>
        </div>
    );
};

export default SumOfNumbers;