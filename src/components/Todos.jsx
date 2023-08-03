import Todo from './Todo'

const Todos = ({ todos, onDelete, onEdit }) => {
  

  return (
    <div className=' ring-1 ring-blue-800 p-4  mt-4'>
       {
        todos.map((item, index)=>
            <Todo todo={item.item} key={item.id} numbering ={index+1}  handleDelete={()=>onDelete(item.id)} handleEdit={()=>onEdit(item.id)} />
        )
       }
    </div>
  )
}

export default Todos