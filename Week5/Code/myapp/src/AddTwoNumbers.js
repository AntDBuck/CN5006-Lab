// Question 7:

import './App.css';

// Component takes two props and returns HTML elements
function SumOfNumbers({num1, num2})
{
    // Creates sum from prop values and displays result in alert box
    function AddNumbers()
    {
        const sum = Number(num1) + Number(num2);
        alert('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);
    };

    // Return HTML, button calls function
    return (
        <div className='App'>
            <h2 style={{color:'red'}}>Add Two Numbers With A Button:</h2>
            <p>{num1} + {num2} = <button onClick={AddNumbers}>Sum</button></p>
            <br/><br/>
        </div>
    );
};

export default SumOfNumbers;