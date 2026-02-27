export interface Project {
  name: string;
  unit: string;
}

export type DisciplineName =
  | '건축'
  | '구조'
  | '공조설비'
  | '배관설비'
  | '설비'
  | '소방'
  | '조경';

export interface DisciplineDef {
  name: DisciplineName;
}

export interface ImageTransform {
  relativeTo?: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface PolygonTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface Position {
  vertices: [number, number][];
  imageTransform?: ImageTransform;
}

export interface Polygon {
  vertices: [number, number][];
  polygonTransform?: PolygonTransform;
}

export interface Revision {
  version: string;
  image: string;
  date: string;
  description: string;
  changes: string[];
  imageTransform?: ImageTransform;
  polygon?: Polygon;
}

export interface Region {
  polygon?: Polygon;
  revisions: Revision[];
}

export interface Discipline {
  imageTransform?: ImageTransform;
  image?: string;
  polygon?: Polygon;
  regions?: Record<string, Region>;
  revisions?: Revision[];
}

export interface Drawing {
  id: string;
  name: string;
  image: string;
  parent: string | null;
  position: Position | null;
  disciplines?: Record<string, Discipline>;
}

export interface Metadata {
  project: Project;
  disciplines: DisciplineDef[];
  drawings: Record<string, Drawing>;
}
