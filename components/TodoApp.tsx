import { useState } from 'react';
type Todo = {
  text: string;
  completed: boolean;
};

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleNewTodoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleNewTodoSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };
  const handleTodoClick = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-9">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          My TodoList 
        </h2>

        <form className="mt-6" onSubmit={handleNewTodoSubmit}>
          <div className="flex rounded-md shadow-sm ">
            <input
              type="text"
              className="flex-1 focus:ring-indigo-500 focus:border-indigo-600 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 "
              placeholder="Add New Todo"
              value={newTodo}
              onChange={handleNewTodoUpdate}
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 "
            >
              Add{' '}
            </button>
          </div>
        </form>

        <ul className="list-disc list-inside mt-6 space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-md shadow-sm cursor-pointer ${
                todo.completed
                  ? 'bg-gray-100  line-through text-gray-500'
                  : 'bg-white'
              }`}
              onClick={() => {
                handleTodoClick(index);
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
