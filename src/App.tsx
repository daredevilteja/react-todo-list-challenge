import { useState } from "react";
import "./App.css";
import ReactModal from "react-modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  function handleAfterModalClose(): void {
    setModalOpen(false);
  }

  function handleModalRequestClose(): void {
    setModalOpen(false);
  }

  return (
    <>
      <header>
        <h1>Task List</h1>
        <button onClick={() => setModalOpen(true)}>Add Task</button>
      </header>
      <main>
        <ReactModal
          isOpen={modalOpen}
          closeTimeoutMS={0}
          contentLabel={"Add Task"}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          onAfterClose={handleAfterModalClose}
          onRequestClose={handleModalRequestClose}
        >
          <p>This is a modal</p>
        </ReactModal>
      </main>
    </>
  );
}

export default App;
