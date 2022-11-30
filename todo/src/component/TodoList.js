import React from 'react';


const TodoList = ({todos, setTodos,setEditTodo}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
  return (
    <div>
        {todos.map((todo)=> (
            <li className='list-item' key={todo.id}>
                <input 
                type="text"
                value={todo.title}
                classname="list"
                onChange={(event) => event.preventDefault()}
            />

            <div>
                
                <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
                <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                <i className='fa fa-trash'></i>
                </button>
            </div>
                
            </li>
        ))}
    </div>
  );
};

export default TodoList;