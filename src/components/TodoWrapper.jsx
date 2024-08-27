import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { useTodos } from '../context/TodosContext';
import Todo from './Todo';
import { AiFillFire } from 'react-icons/ai';

function TodoWrapper() {

  const { todos } = useTodos();
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'notCompleted'

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'pending') return !todo.isCompleted;
    return true;
  });

  return (
    

    <div className='p-5 select-none mt-7 max-w-[500px] mb-12 mx-auto'>
      <div className='w-fit  mx-auto text-5xl  font-extrabold my-3 mb-10'> TODO APP</div>
      
      <TodoForm />
      
      <div className=' flex my-3 mx-auto theme-bg-gray  rounded-md overflow-hidden  '>
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 flex-1  ${filter === 'all' && 'theme-bg-i'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 flex-1  ${filter === 'completed'  && 'theme-bg-i'}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 flex-1  ${filter === 'pending'  && 'theme-bg-i'}`}
        >
          Pending
        </button>
      </div>


      <div className='mt-4 space-y-3  mx-auto'>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))
        ) : (
          <p className='text-center mt-10 text-zinc-600 '>No todos available</p>
        )}
      </div>
    </div>
  )
}

export default TodoWrapper
