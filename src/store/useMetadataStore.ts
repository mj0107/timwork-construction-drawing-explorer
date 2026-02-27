import type { Metadata } from '@/types/metadata';
import { create } from 'zustand';

interface MetadataState {
  metadata: Metadata | null;
  selectedDrawingId: string | null;
  selectedDisciplineName: string | null;
  selectedRegionName: string | null;
  selectedRevisionVersion: string | null;
  isLoading: boolean;
  error: Error | null;
}

interface MetadataActions {
  setMetadata: (metadata: Metadata) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
  selectDrawing: (drawingId: string) => void;
  selectDisciplineName: (disciplineName: string | null) => void;
  selectRegionName: (regionName: string | null) => void;
  selectRevisionVersion: (revisionVersion: string | null) => void;
}

interface MetadataStore extends MetadataState {
  actions: MetadataActions;
}

export const useMetadataStore = create<MetadataStore>((set) => {
  const actions: MetadataActions = {
    setMetadata: (metadata) => set({ metadata }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    selectDrawing: (drawingId) =>
      set({
        selectedDrawingId: drawingId,
        selectedDisciplineName: null,
        selectedRegionName: null,
        selectedRevisionVersion: null,
      }),
    selectDisciplineName: (disciplineName) =>
      set({
        selectedDisciplineName: disciplineName,
        selectedRegionName: null,
        selectedRevisionVersion: null,
      }),
    selectRegionName: (regionName) =>
      set({
        selectedRegionName: regionName,
        selectedRevisionVersion: null,
      }),
    selectRevisionVersion: (revisionVersion) =>
      set({ selectedRevisionVersion: revisionVersion }),
  };

  return {
    metadata: null,
    selectedDrawingId: null,
    selectedDisciplineName: null,
    selectedRegionName: null,
    selectedRevisionVersion: null,
    isLoading: true,
    error: null,
    actions,
  };
});

export const useMetadataActions = () => {
  return useMetadataStore((store) => store.actions);
};
