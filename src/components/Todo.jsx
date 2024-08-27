import React, { useRef, useState } from 'react';
import { useTodos } from '../context/TodosContext';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

function Todo({ todo }) {

  const { deleteTodo, updateTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const textInputRef = useRef();

  const handleCheckboxChange = () => {
    updateTodo(todo.id, { isCompleted: !todo.isCompleted });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => textInputRef.current.focus(), 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const newText = textInputRef.current.value;
      updateTodo(todo.id, { text: newText });
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <div className='flex flex-col bg-white rounded-lg shadow-md p-4 mb-4 theme-bg-gray bg-opacity-50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center flex-grow'>
          <button
            onClick={handleCheckboxChange}
            disabled={isEditing}
            className='mr-4 text-2xl disabled:opacity-40 p-1 cursor-pointer bg-none'
          >
            {todo?.isCompleted ? <FaCheckCircle /> : <FaCircle />}
          </button>
          {isEditing ? (
            <input
              type="text"
              defaultValue={todo.text}
              ref={textInputRef}
              onKeyDown={handleKeyPress}
              className='outline-none text-lg w-full bg-inherit rounded'
            />
          ) : (
            <div className='flex flex-col'>
              <span className={`text-lg ${todo?.isCompleted && 'line-through text-zinc-500'}`}>
                {todo?.text}
              </span>
              {todo?.description && (
                <span className='text-sm text-zinc-400'>
                  {todo.description}
                </span>
              )}
            </div>
          )}
        </div>
        <div className='flex space-x-3 text-xl'>
          {!isEditing && (
            <>
              <button onClick={handleEdit}>
                <RiEdit2Fill />
              </button>
              <button onClick={handleDelete}>
                <MdDelete />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
