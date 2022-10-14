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
        {tasks.length === 0 && <div className="empty-list">Sem tarefas</div>}
        <button className="adicionar" onClick={addTask}>Adicionar tarefa
        <img className="img-adi" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAcElEQVRIiWNgGAXUBN3L1hztXrb2MCl6WEi0w4qB4T9JGphItIBkMGrBCLCAEZnTvWzNUQYGBisKjTxSGhVsC+Oh+YDxH2WGMzAwMPwnLaMgg+5la/53L1tDkgFDP5JHLRh4C0isDxiPUJTORwE2AACWDxcYoSeOdwAAAABJRU5ErkJggg=="></img></button>
      </div>
    </section>
  );
}

TaskList.propTYpes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
