import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [todo, setTodo] = useState('');

  const [todos, setTodos] = useState([
    {item: 'I want to eat', id: crypto.randomUUID()},
])


const addTodo = (e)=>{
  e.preventDefault();
  setTodos((prevTodo) => {
    if (todo === "") return [...prevTodo];
    return [...prevTodo, { item: todo, id: crypto.randomUUID() }];
  });
  
  setTodo("");
}

const deleteTodo = (id)=>{
  setTodos(()=>
    todos.filter((item)=> item.id !== id)
  )
}

const editTodo = (id)=>{
  setTodos(()=>
    todos.map((content)=> {
      if(content.id === id){
        return {item: setTodo(content.item), id: id}
      }
     return content
    }

    )
  )
}

  return (
    <div className="App">
      <Header headerTitle={ 'TODO APP' } />
      <main className=' p-[5rem]'>
      <Form todo={todo} setTodo={setTodo} onSubmitTodo={addTodo} />
      <Todos todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </main>
   
    </div>
  );
}

export default App;
