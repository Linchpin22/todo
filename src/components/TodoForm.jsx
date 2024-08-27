import React, { useRef } from 'react';
import { useTodos } from '../context/TodosContext';
import { LuPlus } from 'react-icons/lu';

function TodoForm() {
    const text = useRef();
    const description = useRef();
    const { addTodo } = useTodos();

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = { 
            id: Date.now(), 
            text: text.current.value, 
            description: description.current.value, 
            isCompleted: false 
        };
        addTodo(newTodo);
        text.current.value = '';
        description.current.value = '';
    };

    return (
        <form 
            onSubmit={handleAddTodo} 
            className='space-y-4 md:space-y-2 theme-bg-gray p-4 rounded-md flex flex-col w-full max-w-md mx-auto'
        >
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2'>
                <label htmlFor='text' className='self-start md:self-center md:w-28'>Task:</label>
                <input 
                    ref={text} 
                    id='text' 
                    className='bg-transparent border-none outline-none rounded-md px-2 flex-grow w-full md:w-auto' 
                    type="text" 
                    required 
                    placeholder='Task goes here' 
                />
            </div>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2'>
                <label htmlFor='description' className='self-start md:self-center md:w-28'>Description:</label>
                <input 
                    ref={description} 
                    id='description' 
                    className='bg-transparent border-none outline-none rounded-md px-2 flex-grow w-full md:w-auto' 
                    type="text" 
                    placeholder='Description here...' 
                />
            </div>
            <button 
                type='submit' 
                className='theme-bg-i h-10 mt-4 md:mt-5 rounded-xl text-2xl font-semibold px-4 md:px-6 self-center' 
            > 
                <LuPlus /> 
            </button>
        </form>
    );
}

export default TodoForm;
