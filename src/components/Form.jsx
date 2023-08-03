function Form({ todo, setTodo, onSubmitTodo }) {
  
  return (
    <form action="" className=' flex items-center gap-4 ring-1 ring-yellow-300' onSubmit={onSubmitTodo}>
        <div>
            <input type="text" placeholder='Enter Todo..' value={todo} onChange={(e)=>{setTodo(e.target.value)}} className=' p-4 font-xl w-[64rem]'/>
        </div>
        <div className="w-[4rem] ring-0 ring-black">
            <button type="submit" className=' p-4 bg-slate-400'>Enter</button>
        </div>
    </form>
  )
}

export default Form