export type NoFields = Record<string, never>;

export interface FirebaseObject {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag extends FirebaseObject {
  name: string;
  descriptions: string;
}

export interface Link extends FirebaseObject {
  title: string;
  description: string;
  href: string;
  onCampusOnly: boolean;
  keywords: string[];
  tags: Tag[];
}
