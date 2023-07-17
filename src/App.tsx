import { useState } from "react";
import "./App.css";
import ReactModal from "react-modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currTask, setCurrTask] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [savedTodo, setSavedTodo] = useState([]);
  const priorityButtons = ["High", "Medium", "Low"];

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
          <div>
            <div>
              <h2>Add Task</h2>
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
              type="submit"
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
        </ReactModal>
        <div>
          {savedTodo.map((val, idx) => (
            <div key={idx}>
              <div>
                <p>Task</p>
                <p>{val["task"]}</p>
              </div>
              <div>
                <p>Priority</p>
                <p>{val["priority"]}</p>
              </div>
              <p
                onClick={() => {
                  setCurrTask(val["task"]);
                  setTaskPriority(val["priority"]);
                  setModalOpen(true);
                }}
              >
                Edit
              </p>
              <p
                onClick={() => {
                  savedTodo.splice(idx, 1);
                  setCurrTask("");
                  setTaskPriority("");
                  setSavedTodo([...savedTodo]);
                }}
              >
                Delete
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
