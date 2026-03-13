export default function ProgressFooter({ total, completed }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-4 px-6 fixed bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <span className="text-sm font-bold text-gray-800 uppercase">Tiến độ hôm nay</span>
          <div className="flex-1 max-w-xs relative bg-gray-200 h-2.5 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[var(--color-brand-orange)] transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold text-[var(--color-brand-orange)]">{percentage}%</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <div>
            <span className="font-bold text-gray-900">{total}</span> <span className="text-gray-500">nhiệm vụ</span>
          </div>
          <div>
            <span className="font-bold text-[var(--color-brand-orange)]">{completed}</span> <span className="text-gray-500">hoàn thành</span>
          </div>
          <div>
            <span className="font-bold text-gray-900">{total - completed}</span> <span className="text-gray-500">đang đợi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
