import { Filter } from 'lucide-react';

export default function FilterBar({ currentFilter, setFilter }) {
  const tabs = [
    { id: 'all', label: 'Tất cả' },
    { id: 'active', label: 'Đang làm' },
    { id: 'completed', label: 'Hoàn thành' },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex bg-gray-100 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentFilter === tab.id
                ? 'bg-white text-[var(--color-brand-orange)] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
        <Filter className="w-4 h-4" />
        Sắp xếp theo
      </button>
    </div>
  );
}
