import React from "react";
import "./TodoList.css";

function TodoList() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input type="text" placeholder="adicione uma tarefa" />
        <button className="add" type="submit">
          ADD
        </button>
      </form>
      <div className="listaTarefas">
        <div className="item">
          <span>Tarefa de exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <div className="item completo">
          <span>Tarefa de exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <button className="delALL">Al Delet</button>
      </div>
    </div>
  );
}

export default TodoList;
