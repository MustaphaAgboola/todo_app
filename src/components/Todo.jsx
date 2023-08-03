import React from 'react'

const Todo = ({ todo, numbering, handleDelete, handleEdit }) => {

  return (
    <div className=' ring-1 ring-red-500 rounded-sm mb-4 flex justify-between p-4 hover:cursor-pointer hover:scale-[1.02]'>
        <div className=' flex items-center gap-2'>
        <p>{numbering}</p>
        <p> {todo} </p>
        </div>
      
        
        <div className=' flex items-center gap-4'>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
       

    </div>
  )
}

export default Todo