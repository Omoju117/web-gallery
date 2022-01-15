// *** User-Defined-Type-Guard *** //
interface workImage {
  imageUrl: string;
}

export default function isWorkImage(x: any): x is workImage {
  return typeof x.imageUrl === 'string';
}
