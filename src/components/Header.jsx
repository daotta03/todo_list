import { Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="bg-[var(--color-brand-orange)] text-white p-2 rounded-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 11 3 3L22 4"/>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-800">Danh sách nhiệm vụ</h1>
      </div>

      <div className="flex-1 max-w-xl px-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-full bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:ring-opacity-50 transition-all shadow-inner"
            placeholder="Tìm kiếm nhiệm vụ..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 p-2 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 p-2 rounded-full transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[var(--color-brand-orange)] cursor-pointer hover:opacity-90 transition-opacity ring-2 ring-white ml-2">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`} 
            alt="User avatar" 
            className="w-full h-full object-cover bg-blue-100"
          />
        </div>
      </div>
    </header>
  );
}
