import Tasks from "./components/Tasks.js";
import tasks from "./Tasks";

export default function DashBoard() {
  return (
    <>
      <h1 className="text-center text-[25px] font-bold">Personal DashBoard</h1>
      <div className="tasks">
        {tasks.map((task) => (
          <Tasks key={task.id} taskNumber={task.id} taskName={task.taskName} />
        ))}
      </div>
    </>
  );
}
