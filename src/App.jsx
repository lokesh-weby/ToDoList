import { useEffect, useRef, useState } from 'react'
import Todo from './components/Todo'

function App() {

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todolist))
  })

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        add()
    }})

  const inputRef=useRef();

  const [todolist,setTodolist]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])

const add=()=>{
  const inputText=inputRef.current.value.trim();
  if(inputText===""){
    return null
  }
  const newtodo={
    id:Date.now(),
    task:inputText,
    isComplete:false
  };
  setTodolist((prev)=>[...prev,newtodo])
  inputRef.current.value=""
}

const updateTask=(id)=>{
  setTodolist((prev)=>{
    return prev.map((todo)=>{
      if(id==todo.id){
          return {...todo,isComplete:!todo.isComplete}
      }
      return todo
    })
  })
}

const deleteTask=(id)=>{
  setTodolist((prev)=>{
    return prev.filter((todo)=>todo.id!=id);
  })
}
  return (
    <>
    <section className='max-w-[85vw] m-auto my-20'>
      <h1 className='text-yellow-500 font-bold'>To-Do List</h1>
      <div className='flex my-2 gap-2'>
        <input type="text" placeholder='Enter the task' className='bg-white flex-1 p-3 focus:outline-none rounded' ref={inputRef} />
        <button className='bg-yellow-600 p-3 px-4 rounded' onClick={add}>Add Task</button>
      </div>
      
      <div className='space-y-3 bg-white py-8'>
      <h1 className='text-red-600 mx-4'>Task Items: </h1>

      {todolist.length===0?(<p className='mx-4 text-orange-400 text-center font-medium'>No Task found!</p>):
      (todolist.map((todo,index)=>{
        return <Todo task={todo.task} key={index} id={todo.id} isComplete={todo.isComplete} updateTask={updateTask} deleteTask={deleteTask} />
      }))}
      </div>
    </section>
    </>
  )
}

export default App
