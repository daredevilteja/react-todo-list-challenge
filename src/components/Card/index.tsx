import { IconContext, Pencil, Trash } from "@phosphor-icons/react";
import "./styles.css";

interface Card {
  val: { task: string; priority: string };
  idx: number;
  setCurrTask: React.Dispatch<React.SetStateAction<string>>;
  setDeleteIdx: React.Dispatch<React.SetStateAction<number>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  setTaskPriority: React.Dispatch<React.SetStateAction<string>>;
}

export default function Card({
  val,
  idx,
  setCurrTask,
  setDeleteIdx,
  setModalOpen,
  setModalType,
  setTaskPriority,
}: Card) {
  return (
    <IconContext.Provider
      value={{
        color: "limegreen",
        size: 20,
        weight: "bold",
        mirrored: false,
      }}
    >
      <div className={"outerContainer"}>
        <div>
          <p>Task</p>
          <p>{val["task"]}</p>
        </div>
        <div>
          <p>Priority</p>
          <p>{val["priority"]}</p>
        </div>
        <div className={"iconContainer"}>
          <Pencil
            className={"icon"}
            onClick={() => {
              setCurrTask(val["task"]);
              setTaskPriority(val["priority"]);
              setModalType("Edit Task");
              setModalOpen(true);
            }}
          />

          <Trash
            className={"icon"}
            onClick={() => {
              setDeleteIdx(idx);
              setModalType("Delete");
              setModalOpen(true);
            }}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
}
