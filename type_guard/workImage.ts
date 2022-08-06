// *** User-Defined-Type-Guard *** //

export default function isJSONStringified(x: any): x is string {
  return typeof x === 'string';
}
