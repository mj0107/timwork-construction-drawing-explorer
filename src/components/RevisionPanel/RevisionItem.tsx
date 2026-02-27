import ListItem from '@/components/ui/ListItem';
import { useMetadataActions, useMetadataStore } from '@/store/useMetadataStore';
import type { Revision } from '@/types/metadata';

interface RevisionItemProps {
  revision: Revision;
}

export default function RevisionItem({ revision }: RevisionItemProps) {
  const { selectedRevisionVersion } = useMetadataStore();
  const { selectRevisionVersion } = useMetadataActions();

  return (
    <ListItem selected={selectedRevisionVersion === revision.version}>
      <button
        className="w-full px-4 py-2 cursor-pointer flex flex-col text-left items-start gap-2"
        onClick={() => selectRevisionVersion(revision.version)}
      >
        <div className="w-full flex justify-between items-center">
          <div className="text-sm text-blue-500 font-bold border-2 border-blue-500 px-2 py-0.5 rounded-4xl">
            {revision.version}
          </div>
          <p className="text-xs">{revision.date}</p>
        </div>

        <div className="w-full">
          <p className="text-sm font-semibold">{revision.description}</p>
        </div>

        <ul className="w-full list-disc list-inside">
          {revision.changes.map((change, index) => (
            <li key={index} className="text-sm">
              {change}
            </li>
          ))}
        </ul>
      </button>
    </ListItem>
  );
}
