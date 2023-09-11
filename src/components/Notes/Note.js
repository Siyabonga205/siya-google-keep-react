import React, { useState } from 'react'

function Note(props) {

  const { toggleModal, note, setSelectedNote } = props;
  const [title, setTitle] = useState(note.title);
  const [isHover, setIsHover] = useState(false)

  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote();
  };


    const hoverOutHandler = () => {
      setIsHover(false);
    };
    const hoverOverHandler = () => {
      setIsHover(true)
    };
    const deleteHandler = () => props.deleteNote(note.id)
    return (
    
        <div className="note"
        id={props.id}
        onClick={noteClickHandler}
        onMouseOver={hoverOverHandler}
        onMouseOut={hoverOutHandler}
        >
          {
            isHover && (
              <span className="material-symbols-outlined check-circle"
          >check_circle</span>
            )}
        <div className="title">{title}</div>
        <div className="text">{props.text}</div>
        
<div className="note-footer" style={{ visibility: isHover ? "visible" : "hidden" }}>
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
          <div className="tooltip archive" onClick={deleteHandler}>
            <span className="material-symbols-outlined hover small-icons"
              >archive</span>
            <span className="tooltip-text">Archive</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icons"
              >more_vert</span>
            <span className="tooltip-text">More</span>
          </div>
        </div>
      </div>
    );
};

export default Note;