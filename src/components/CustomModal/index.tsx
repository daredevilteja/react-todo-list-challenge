import ReactModal from "react-modal";
import { X } from "@phosphor-icons/react";
import "./styles.css";

interface Todo {
  task: string;
  priority: string;
}

interface CustomModal {
  modalType: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currTask: string;
  setCurrTask: React.Dispatch<React.SetStateAction<string>>;
  taskPriority: string;
  setTaskPriority: React.Dispatch<React.SetStateAction<string>>;
  priorityButtons: Array<string>;
  savedTodo: Array<Todo>;
  setSavedTodo: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  deleteIdx: number;
}

export default function CustomModal({
  modalType,
  modalOpen,
  setModalOpen,
  currTask,
  setCurrTask,
  taskPriority,
  setTaskPriority,
  priorityButtons,
  savedTodo,
  setSavedTodo,
  deleteIdx,
}: CustomModal) {
  function handleAfterModalClose(): void {
    setModalOpen(false);
  }

  function handleModalRequestClose(): void {
    setModalOpen(false);
  }
  return (
    <ReactModal
      isOpen={modalOpen}
      closeTimeoutMS={0}
      contentLabel={modalType}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      onAfterClose={handleAfterModalClose}
      onRequestClose={handleModalRequestClose}
      ariaHideApp={false}
    >
      {modalType !== "Delete" ? (
        <div>
          <div className="header">
            <h2>{modalType}</h2>
            <X className="icon" size={32} onClick={() => setModalOpen(false)} />
          </div>
          <div>
            <p>Task</p>
            <input
              type="text"
              name="task"
              id="task"
              value={currTask}
              onChange={(e) => setCurrTask(e.target.value)}
              required
            />
          </div>
          <div>
            <p>Priority</p>
            <div>
              {priorityButtons.map((val, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTaskPriority(val);
                  }}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              const newTodo = { task: currTask, priority: taskPriority };
              savedTodo.unshift(newTodo);
              setSavedTodo([...savedTodo]);
              setModalOpen(false);
            }}
            disabled={
              currTask.trim().length > 0 && taskPriority.trim().length > 0
                ? false
                : true
            }
          >
            Add
          </button>
        </div>
      ) : (
        <div>
          <div>
            <h2>{"Are you sure you want to delete this task?"}</h2>
          </div>
          <div>
            <button
              onClick={() => {
                savedTodo.splice(deleteIdx, 1);
                setCurrTask("");
                setTaskPriority("");
                setSavedTodo([...savedTodo]);
                setModalOpen(false);
              }}
            >
              Delete
            </button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </ReactModal>
  );
}
