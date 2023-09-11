import React, { useState } from 'react';
import './Form.css';
import { uid } from 'uid';

function Form(props) {

  console.log(props);
  const { edit, selectedNote } = props;
  const [title, setTitle] = useState(edit && selectedNote.title || "");
  const [text, setText] = useState(edit && selectedNote.text || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value)
    setIsActiveForm(true);
  };
      

  const submitFormHandler = (event) => {
    event.preventDefault();
     
    const note = {
      id: uid(),
      title,
      text,
    };
    props.addNote(note);
    console.log(note)
    setTitle("");
    setText("");
  };

  const formClickHandler = () => {
    setIsActiveForm(false);
  };

    return (
        <div>

        {
          !isActiveForm ? (
            <div className="form-container inactive-form" onClick={formClickHandler}>
        <form>
          <input className="note-text" type="text" placeholder="Take a note..." />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-symbols-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
          </div>
        </form>
      </div> 

          ) : (
        
      <div className="form-container active-form">
      <form onSubmit={submitFormHandler} className="form" >
        <input
          onChange={titleChangeHandler}
          value={title}
          type="text"
          class="note-title"
          placeholder="Title"
        />
        <input
          onChange={textChangeHandler}
          value={text}
          class="note-text"
          type="text"
          placeholder="Take a note..."
        />
        <div className="form-actions">
          <div className="icons">
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >add_alert</span>
              <span className="tooltip-text">Remind me</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >person_add</span>
              <span className="tooltip-text">Collaborator</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >palette</span>
              <span className="tooltip-text">Change Color</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >image</span>
              <span className="tooltip-text">Add Image</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >archive</span>
              <span className="tooltip-text">Archive</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >more_vert</span>
              <span className="tooltip-text">More</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >undo</span>
              <span className="tooltip-text">Undo</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icons"
                >redo</span
              >
              <span className="tooltip-text">Redo</span>
            </div>
          </div>
          <button type='submit' class="close-btn">Close</button>
        </div>
      </form>
    </div>
    )}
      </div>
          );
};

    

export default Form;