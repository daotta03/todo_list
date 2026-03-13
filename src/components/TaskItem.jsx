import { Trash2, Clock } from 'lucide-react';

export default function TaskItem({ task, onToggle, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CAO':
        return 'bg-red-100 text-red-600 font-bold';
      case 'TRUNG BÌNH':
        return 'bg-orange-100 text-orange-600 font-bold';
      case 'THẤP':
        return 'bg-blue-100 text-blue-600 font-bold';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className={`group flex items-center gap-4 p-5 bg-white rounded-2xl border transition-all ${
      task.completed ? 'border-gray-100 bg-gray-50/50' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-brand-orange)]/30'
    }`}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:outline-none checked:bg-[var(--color-brand-orange)] checked:border-[var(--color-brand-orange)] transition-colors cursor-pointer"
        />
        <svg
          className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <h3 className={`text-lg font-medium truncate transition-colors ${
          task.completed ? 'text-gray-400 line-through' : 'text-gray-800'
        }`}>
          {task.title}
        </h3>
        <div className="flex items-center gap-3 mt-1">
          <span className={`text-xs px-2 py-0.5 rounded ${getPriorityColor(task.priority)}`}>
            {task.priority || 'BÌNH THƯỜNG'}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            {task.completed ? (
              <>
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                Hoàn thành lúc {task.completedAt}
              </>
            ) : (
              <>
                <Clock className="w-3.5 h-3.5" />
                {task.time}, {task.date}
              </>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={onDelete}
        className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Delete task"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
