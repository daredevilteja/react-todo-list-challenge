import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CustomModal from "./components/CustomModal";

interface Todo {
  task: string;
  priority: string;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("Add Task");
  const [deleteIdx, setDeleteIdx] = useState<number>(0);
  const [currTask, setCurrTask] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [savedTodo, setSavedTodo] = useState<Array<Todo>>([]);
  const priorityButtons = ["High", "Medium", "Low"];

  return (
    <>
      <header>
        <h1>Task List</h1>
        <button
          onClick={() => {
            setCurrTask("");
            setTaskPriority("");
            setModalType("Add Task");
            setModalOpen(true);
          }}
        >
          Add Task
        </button>
      </header>
      <main>
        <CustomModal
          modalType={modalType}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          currTask={currTask}
          setCurrTask={setCurrTask}
          taskPriority={taskPriority}
          setTaskPriority={setTaskPriority}
          priorityButtons={priorityButtons}
          savedTodo={savedTodo}
          setSavedTodo={setSavedTodo}
          deleteIdx={deleteIdx}
        />
        <div>
          {savedTodo.map((val, idx) => (
            <Card
              key={idx}
              val={val}
              idx={idx}
              setCurrTask={setCurrTask}
              setDeleteIdx={setDeleteIdx}
              setModalOpen={setModalOpen}
              setModalType={setModalType}
              setTaskPriority={setTaskPriority}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
