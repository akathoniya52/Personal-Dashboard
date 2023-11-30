import { useState } from "react";

export default function Tasks(props) {
  const [bg, setBg] = useState(localStorage.getItem(`bg-${props.taskNumber}`));
  function Done(Number) {
    setBg("green");
    localStorage.setItem(`bg-${Number}`, "green");
  }

  function NotDone(Number) {
    setBg("red");
    localStorage.setItem(`bg-${Number}`, "red");
  }

  function resetTasks(Number) {
    setBg("blue");
    localStorage.setItem(`bg-${Number}`, "blue");
  }

  return (
    <>
      <div className="task" style={{ background: bg === null ? "blue" : bg }}>
        <div>
          Task {props.taskNumber}. {props.taskName}
        </div>
        <div>
          <button onClick={() => Done(props.taskNumber)}>✅</button>
          <button onClick={() => NotDone(props.taskNumber)}>❌</button>
          <button onClick={() => resetTasks(props.taskNumber)}>🔄️</button>
        </div>
      </div>
    </>
  );
}
