import RegionList from '@/components/RevisionPanel/RegionList';
import RevisionList from '@/components/RevisionPanel/RevisionList';

export default function RevisionPanel() {
  return (
    <aside className="w-64 h-full border-l border-gray-200 flex flex-col">
      <div className="w-full">
        <p className="w-full font-semibold border-b border-gray-200 px-4 py-2 bg-white shadow-sm">
          리비전 이력
        </p>
      </div>

      <RegionList />

      <RevisionList />
    </aside>
  );
}
