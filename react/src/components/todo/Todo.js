import './Todo.css'
import TodoList from '../todo_list/TodoList';
import TodoCreate from '../todo_create/TodoCreate';
import { useState } from 'react';

const Todo = () => {

    const [getTodos, setTodos] = useState ([
        { id:1, title:'Eat'},
        { id:2, title:'Sleap'},
    ]) 

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }


    return (
        <div>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <h3>Todo List</h3>
            <TodoList dataTodos={getTodos} />
        </div>
    )
}
export default Todo;
