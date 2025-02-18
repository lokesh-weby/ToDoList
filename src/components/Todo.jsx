import React from 'react'

const Todo = ( {task,isComplete,updateTask, id, deleteTask}) => {
  return (
    <>
        <div className='bg-white  cursor-pointer rounded px-10'>
            <div className='flex select-none items-center '>
                <label className={`flex-1 cursor-pointer hover:bg-gray-200 py-5 px-2 rounded-md ${isComplete?"line-through":""}`}
                onClick={()=>updateTask(id)}
                >{task}</label>
                <button className='mr-2 hover:text-red-700 py-5 px-5 rounded-md hover:bg-red-100 outline-none cursor-pointer' onClick={()=>deleteTask(id)}>
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default Todo
