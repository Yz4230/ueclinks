export type NoFields = Record<string, never>;

export interface FirebaseObject {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  name: string;
  descriptions: string;
}

export type FTag = Tag & FirebaseObject;

export interface Link {
  title: string;
  description: string;
  href: string;
  onCampusOnly: boolean;
  keywords: string[];
}

export type FLink = Link & FirebaseObject;
