import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center">TODOリスト</h1>
      </header>

      <main className="flex-grow p-2 sm:p-4 overflow-auto">
        <Card className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-4 sm:mt-8">
          <CardContent className="p-3 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-4">
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="新しいタスクを入力..."
                className="w-full"
              />
              <Button onClick={addTodo} className="w-full">追加</Button>
            </div>
            <div className="overflow-auto max-h-[calc(100vh-300px)] sm:max-h-[calc(100vh-350px)] md:max-h-[calc(100vh-400px)]">
              <ul className="space-y-2">
                {todos.map(todo => (
                  <li key={todo.id} className="flex items-center justify-between space-x-2 bg-secondary p-2 sm:p-3 rounded text-sm sm:text-base">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-grow">
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                        className="border-primary"
                      />
                      <span className={`${todo.completed ? 'line-through text-muted-foreground' : ''} flex-grow break-all`}>
                        {todo.text}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 size={16} className="sm:w-5 sm:h-5" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-2 sm:p-4 text-center text-sm sm:text-base">
        <p>&copy; 2024 TODOリストアプリ</p>
      </footer>
    </div>
  );
};

export default TodoList;
