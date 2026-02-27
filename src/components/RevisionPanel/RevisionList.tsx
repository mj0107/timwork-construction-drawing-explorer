import RevisionItem from '@/components/RevisionPanel/RevisionItem';
import { useMetadataActions, useMetadataStore } from '@/store/useMetadataStore';
import { useEffect, useMemo } from 'react';

export default function RevisionList() {
  const {
    metadata,
    selectedDrawingId,
    selectedDisciplineName,
    selectedRegionName,
    selectedRevisionVersion,
  } = useMetadataStore();
  const { selectRevisionVersion } = useMetadataActions();

  const selectedDrawing = metadata?.drawings[selectedDrawingId || ''];
  const selectedDiscipline =
    selectedDrawing?.disciplines?.[selectedDisciplineName || ''];
  const selectedRegion =
    selectedDiscipline?.regions?.[selectedRegionName || ''];
  const hasRegions = selectedDiscipline?.regions;

  const sortedRevisions = useMemo(() => {
    const revisions = selectedRegion
      ? selectedRegion.revisions
      : selectedDiscipline?.revisions || [];
    return [...revisions].sort((a, b) => b.version.localeCompare(a.version));
  }, [selectedRegion, selectedDiscipline?.revisions]);

  useEffect(() => {
    if (sortedRevisions.length > 0) {
      const isSelectedRevisionInList = sortedRevisions.some(
        (r) => r.version === selectedRevisionVersion,
      );
      if (!isSelectedRevisionInList) {
        selectRevisionVersion(sortedRevisions[0].version);
      }
    }
  }, [sortedRevisions, selectedRevisionVersion, selectRevisionVersion]);

  if (!selectedDiscipline) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-sm text-gray-400">
        <p>공종을 선택하면</p>
        <p>리비전 이력이 표시됩니다</p>
      </div>
    );
  }

  if (hasRegions && !selectedRegion) {
    return (
      <p className="flex flex-col items-center justify-center h-full text-sm text-gray-400">
        위에서 구역(Region)을 선택하세요
      </p>
    );
  }

  return (
    <ul>
      {sortedRevisions.map((revision) => (
        <RevisionItem key={revision.version} revision={revision} />
      ))}
    </ul>
  );
}
