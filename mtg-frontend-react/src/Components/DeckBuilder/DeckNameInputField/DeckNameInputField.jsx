import './DeckNameInputField.css';
import {useState} from "react";
import {checkIcon, pencilIcon} from "../../../Assets/index.js";
import {useNavigate, useParams} from "react-router-dom";
const DeckNameInputField = ({ setDeckName }) => {
    const  [inputField,setInputField] = useState('');
    const [nameEditMode, setNameEditMode] = useState( false );
    const navigate = useNavigate();
    const { name } = useParams();

    const handlePencilButtonClick = () => {
        setNameEditMode( true );
    }
    const handleCheckButton = () => {
        if( inputField !== ''){
            navigate(`/build/${inputField}`)
            setNameEditMode( false );
            setDeckName(inputField)
        }
    }
    const handleInput = ( input ) => {
        setInputField( input );
    }

    return (
        <h1 className={'deck-builder-deck-name'}>
            { nameEditMode ?
        <input
            onChange={(e) => handleInput(e.target.value)}
            value={inputField}
            placeholder={'Enter Deck Name'}
            className={'new-deck-name-input'} />
                :
                <p>{name}</p>
            }
    {nameEditMode ? <img src={checkIcon} onClick={handleCheckButton} /> : <img src={pencilIcon} onClick={handlePencilButtonClick}/>}
        </h1>
    );
};

export default DeckNameInputField;
