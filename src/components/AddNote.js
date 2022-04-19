import React, {useState} from 'react'

function AddNote({handleAddNote}) {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  const handleChange = (event) => {
    if(charLimit - event.target.value.length >= 0){
        setNoteText(event.target.value);  
    } 
  }

  const handleSaveClick = () => {
      if(noteText.trim().length > 0){
        handleAddNote(noteText);
        setNoteText("");
      } 
  }

  return (
    <div className='note new'>
        <textarea
            rows='8'
            cols='10'
            placeholder='Type to add a note...'
            value={noteText}
            onChange={handleChange}>
        </textarea>
        <div className='note-footer'>
            {charLimit - noteText.length > 0 ? 
            <small>
                {charLimit - noteText.length} characters remaining
            </small> 
            :
            <small>Character limit reached</small> }
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote