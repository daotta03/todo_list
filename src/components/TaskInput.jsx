import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function TaskInput({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">THÊM NHANH</h2>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full pl-5 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-transparent transition-all"
            placeholder="Nhập tên nhiệm vụ và nhấn Enter..."
          />
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          disabled={!title.trim()}
          className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white px-8 py-3.5 rounded-xl font-medium flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Thêm
        </button>
      </form>
    </div>
  );
}
