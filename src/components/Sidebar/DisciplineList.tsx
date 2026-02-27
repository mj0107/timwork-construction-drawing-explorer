import ListItem from '@/components/ui/ListItem';
import { useMetadataActions, useMetadataStore } from '@/store/useMetadataStore';

const DISCIPLINE_COLORS: Record<string, string> = {
  건축: '#388bfd',
  구조: '#d29922',
  공조설비: '#3fb950',
  배관설비: '#bc8cff',
  설비: '#bc8cff',
  소방: '#f85149',
  조경: '#39d353',
};

export default function DisciplineList() {
  const { metadata, selectedDrawingId, selectedDisciplineName } =
    useMetadataStore();
  const { selectDisciplineName } = useMetadataActions();

  const selectedDrawing = metadata?.drawings[selectedDrawingId || ''];

  const disciplineList = selectedDrawing?.disciplines
    ? Object.keys(selectedDrawing.disciplines).sort()
    : [];

  return (
    <ul>
      {disciplineList.length > 0 ? (
        disciplineList.map((disciplineName) => (
          <ListItem
            key={disciplineName}
            selected={selectedDisciplineName === disciplineName}
          >
            <button
              onClick={() => selectDisciplineName(disciplineName)}
              className="w-full px-4 py-2 cursor-pointer font-medium flex items-center gap-2"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: DISCIPLINE_COLORS[disciplineName],
                }}
              />
              {disciplineName}
            </button>
          </ListItem>
        ))
      ) : (
        <li className="px-4 py-4 text-sm text-gray-500 text-center">
          공종이 없습니다.
        </li>
      )}
    </ul>
  );
}
