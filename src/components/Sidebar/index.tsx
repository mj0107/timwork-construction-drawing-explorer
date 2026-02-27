import DisciplineList from '@/components/Sidebar/DisciplineList';
import DrawingList from '@/components/Sidebar/DrawingList';

export default function Sidebar() {
  return (
    <aside className="w-64 h-full border-r border-gray-200 flex flex-col">
      <div className="w-full">
        <p className="w-full text-sm border-b border-gray-200 px-4 py-2 bg-white shadow-sm">
          건물 / 구역
        </p>

        <DrawingList />
      </div>

      <div className="w-full border-t border-gray-200">
        <p className="w-full text-sm border-b border-gray-200 px-4 py-2 bg-white shadow-sm">
          공종
        </p>

        <DisciplineList />
      </div>
    </aside>
  );
}
