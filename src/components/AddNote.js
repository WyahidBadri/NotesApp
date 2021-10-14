import React, {useState} from 'react';

const Addnote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const charLimit = 200;

    const handleChange = (e) => { 
        if(charLimit - e.target.value.length >= 0){
            setNoteText(e.target.value)
        }
    }
    
    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className="note new">
            <textarea rows="8" 
            cols="10" 
            placeholder="type to add note" 
            value={noteText} 
            onChange={handleChange}>

            </textarea>

            <div className="note-footer">

                <small>{charLimit - noteText.length}</small>
                <button className="save" onClick={handleSaveClick}>Save</button>

            </div>
        </div>
    );
}

export default Addnote;
