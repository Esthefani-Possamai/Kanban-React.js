import React, { useState } from "react";
import "./styletasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  // const [count, setCount] = useState(0);
  // //quero que cada vez que eu clicar no botão, incremente 1 no count

  // const increment = () => {
  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });
  // };

  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <section className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div>Sem tarefas</div>}
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </section>
  );
}

//posso definir o tipo da prop que será passada por parâmetro
TaskList.propTYpes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
