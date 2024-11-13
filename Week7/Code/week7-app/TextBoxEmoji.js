// Question 3

// Import useState and useEffect from the React libaray
import {useState, useEffect} from 'react';

// Import images from emojis folder
import Happy from './emojis/happy.png';
import Sad from './emojis/sad.png';
import Angry from './emojis/angry.png';

// Component that uses useState and useEffect to display emoji when user inputs associated string 
function TextBoxEmoji()
{
    // Declare string state variable and state updater function.
    const [inputText, setInputText] = useState('');
    // Declare image state variable and state updater function.
    const [emojiImage, setEmojiImage] = useState(null);

    // Event handler function that updates inputText state
    const handleInputText = (event) =>
    {
        setInputText(event.target.value);
    };

    // Compare inputText state to string cases and update emojiImage appropriately
    useEffect(() =>
    {
        switch(inputText.toLocaleLowerCase())
        {
            case 'happy':
                setEmojiImage(Happy);
                break;
            case 'sad':
                setEmojiImage(Sad);
                break;
            case 'angry':
                setEmojiImage(Angry);
                break;
            default:
                setEmojiImage(null);
        };
    }, [inputText]);

    // CSS object for styling of parent div
    const divStyleParent =
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0cc',
        padding: 20,
        fontFamily: 'arial',
        fontSize: 20
    };

    // CSS object for styling of child div
    const divStyleChild =
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingBottom: 30
    };

    // CSS object for styling of text box
    const textBoxStyle =
    {
        marginRight: 10,
        fontSize: 20
    };

    // Return heading, textbox, and display emoji when appropriate value is inputted
    return(
        <div style={divStyleParent}>
            <h2>How are you feeling today?: </h2>
            <div style={divStyleChild}>
                <input
                    style={textBoxStyle}
                    type='text' 
                    value={inputText} 
                    onChange={handleInputText}
                    placeholder='happy, sad, or angry?'>
                </input>
                <label>
                    <img src={emojiImage} alt=''/>
                </label>
            </div>
        </div>
    );
};

// Export component for use in index.js
export default TextBoxEmoji;