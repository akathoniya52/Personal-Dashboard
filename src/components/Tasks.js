import { useState, useEffect } from "react";

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

  useEffect(() => {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      // console.log("It is now 12 AM!");
      localStorage.setItem(`bg-${props.taskNumber}`, "blue");
      // Place your function here
    }, timeUntilMidnight);

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  return (
    <div className="task" style={{ background: bg === null ? "blue" : bg }}>
      <div>
        Task {props.taskNumber}. {props.taskName}
      </div>
      <div>
        <button onClick={() => Done(props.taskNumber)}>✅</button>
        <button onClick={() => NotDone(props.taskNumber)}>❌</button>
      </div>
    </div>
  );
}
