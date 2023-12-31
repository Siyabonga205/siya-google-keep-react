import './Modal.css';
import Form from '../Form';

function Modal(props) {
  const { isModalOpen, selectedNote } = props;
    return (
        <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
        <div className="modal-content">
          <Form selectedNote={selectedNote} edit/>
        </div>
      </div>
    )
}

export default Modal;