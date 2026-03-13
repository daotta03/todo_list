import { useState, useMemo } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import ProgressFooter from './components/ProgressFooter';
import './App.css';

const INITIAL_TASKS = [
  { id: 1, title: 'Hoàn thiện tài liệu dự án TaskMaster', priority: 'CAO', time: '09:30 AM', date: 'Hôm nay', completed: false },
  { id: 2, title: 'Họp team thiết kế UI/UX', priority: 'TRUNG BÌNH', time: '02:00 PM', date: 'Hôm nay', completed: false },
  { id: 3, title: 'Gửi email cho đối tác marketing', priority: 'THẤP', completed: true, completedAt: '08:15 AM' },
  { id: 4, title: 'Kiểm tra thông báo mới trên Slack', priority: 'THẤP', time: '05:00 PM', date: 'Hôm nay', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      priority: 'BÌNH THƯỜNG',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: 'Hôm nay',
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { 
            ...task, 
            completed: !task.completed,
            completedAt: !task.completed ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : undefined,
            time: task.completed ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : task.time,
            date: task.completed ? 'Hôm nay' : task.date
          } 
        : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(t => !t.completed);
      case 'completed':
        return tasks.filter(t => t.completed);
      case 'all':
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--color-bg-main)] pb-24">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl px-4 py-8 flex flex-col gap-8">
        <TaskInput onAdd={addTask} />
        
        <div className="flex flex-col gap-4">
          <FilterBar currentFilter={filter} setFilter={setFilter} />
          
          <div className="mt-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nhiệm vụ của bạn</h2>
            <TaskList 
              tasks={filteredTasks} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          </div>
        </div>
      </main>

      <ProgressFooter total={tasks.length} completed={completedCount} />
    </div>
  );
}

export default App;
