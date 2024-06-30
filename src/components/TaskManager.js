import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">タスク管理</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="新しいタスクを入力"
          className="flex-grow mr-2"
        />
        <Button onClick={addTask} className="bg-blue-500 hover:bg-blue-600">
          <PlusCircle className="mr-2 h-4 w-4" /> 追加
        </Button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-3 rounded">
            <span>{task.text}</span>
            <Button onClick={() => removeTask(task.id)} variant="ghost" size="sm">
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
