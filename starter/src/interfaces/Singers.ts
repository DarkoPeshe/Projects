export interface Artist {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: Album[];
}

export interface Album {
  title: string;
  year: number;
  cover: string;
  price: number;
  albumId: string;
}
