// Image interface based on JSONPlaceholder API response
export interface ImageData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default async function getAllImages(): Promise<ImageData[]> {
  const result = await fetch('https://jsonplaceholder.typicode.com/photos');
  return result.json();
}