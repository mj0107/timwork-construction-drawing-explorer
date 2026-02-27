import { useMetadataStore } from '@/store/useMetadataStore';
import { useLayoutEffect, useState } from 'react';

export default function Viewer() {
  const {
    metadata,
    selectedDrawingId,
    selectedDisciplineName,
    selectedRegionName,
    selectedRevisionVersion,
  } = useMetadataStore();

  const selectedDrawing = metadata?.drawings[selectedDrawingId || ''];
  const selectedDiscipline =
    selectedDrawing?.disciplines?.[selectedDisciplineName || ''];
  const selectedRegion =
    selectedDiscipline?.regions?.[selectedRegionName || ''];

  let displayImage = selectedDrawing?.image;
  if (selectedDiscipline) {
    displayImage = selectedDiscipline.image;
  }
  if (selectedRevisionVersion) {
    if (selectedRegion) {
      displayImage = selectedRegion.revisions?.find(
        (r) => r.version === selectedRevisionVersion,
      )?.image;
    } else {
      displayImage = selectedDiscipline?.revisions?.find(
        (r) => r.version === selectedRevisionVersion,
      )?.image;
    }
  }

  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!displayImage) return;

    const img = new Image();
    img.src = `/drawings/${displayImage}`;
    img.onload = () => {
      setImgSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [displayImage]);

  if (!selectedDrawing) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400">
        도면을 선택해주세요.
      </div>
    );
  }

  return (
    <div className="relative flex-1 bg-gray-100 p-4 overflow-hidden flex items-center justify-center">
      {imgSize.width > 0 && imgSize.height > 0 ? (
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${imgSize.width} ${imgSize.height}`}
          className="bg-white shadow-xl"
        >
          <image
            href={`/drawings/${displayImage}`}
            x={0}
            y={0}
            width={imgSize.width}
            height={imgSize.height}
          />
        </svg>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          도면 로딩 중...
        </div>
      )}
    </div>
  );
}
