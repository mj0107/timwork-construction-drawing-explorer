import ListItem from '@/components/ui/ListItem';
import { useMetadataActions, useMetadataStore } from '@/store/useMetadataStore';

export default function DrawingList() {
  const { metadata, selectedDrawingId } = useMetadataStore();
  const { selectDrawing } = useMetadataActions();

  const drawings = metadata?.drawings;
  const drawingList = drawings
    ? Object.values(drawings).sort((a, b) => a.id.localeCompare(b.id))
    : [];

  return (
    <ul>
      {drawingList.map((drawing) => (
        <ListItem key={drawing.id} selected={selectedDrawingId === drawing.id}>
          <button
            onClick={() => selectDrawing(drawing.id)}
            className="w-full text-left px-4 py-2 cursor-pointer font-semibold"
          >
            {drawing.name}
          </button>
        </ListItem>
      ))}
    </ul>
  );
}
