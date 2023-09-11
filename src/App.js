import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [
  {
    id: "a123",
    title: "title1",
    text: "text1"
  }
]

function App() {
  
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => id !== note.id)
    });
  };

  const toggleModal = () => {
    setIsModalOpen(prevState => {
      return !prevState
    })
  }
  
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <Form addNote={addNote}/>
    <Notes notes={notes} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/>
    {isModalOpen && (
      <Modal isModalOpen={isModalOpen} selectedNote={selectedNote}/>
    )}
    </div>
  );
}

export default App;
