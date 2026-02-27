import { useMetadataActions, useMetadataStore } from '@/store/useMetadataStore';
import { cn } from '@/utils/style.util';

export default function RegionList() {
  const {
    metadata,
    selectedDrawingId,
    selectedDisciplineName,
    selectedRegionName,
  } = useMetadataStore();
  const { selectRegionName } = useMetadataActions();

  const selectedDrawing = metadata?.drawings[selectedDrawingId || ''];
  const selectedDiscipline =
    selectedDrawing?.disciplines?.[selectedDisciplineName || ''];
  const regions = selectedDiscipline?.regions;

  return (
    <>
      {regions ? (
        <ul className="flex gap-2 p-2 border-b border-gray-200">
          {Object.keys(regions).map((regionName) => (
            <li key={regionName}>
              <button
                className={cn(
                  'p-1 cursor-pointer font-medium flex items-center gap-2 border rounded-4xl',
                  selectedRegionName === regionName
                    ? 'border-blue-700 bg-blue-50 text-blue-700 font-bold'
                    : 'hover:bg-blue-50',
                )}
                onClick={() => selectRegionName(regionName)}
              >
                <span className="text-sm">{`구역 ${regionName}`}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
