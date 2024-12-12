import { map, Observable } from 'rxjs';

function lowercaseFirstLetterKeys(obj: any): any {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(lowercaseFirstLetterKeys);
  }

  return Object.keys(obj).reduce((acc, key) => {
    const newKey =
      key === 'ID' ? 'id' : key.charAt(0).toLowerCase() + key.slice(1);

    acc[newKey] = lowercaseFirstLetterKeys(obj[key]);
    return acc;
  }, {} as any);
}

// Generic RxJS operator
export function lowercaseJsonKeys<T>(): (
  source: Observable<T>
) => Observable<T> {
  return (source: Observable<T>) =>
    source.pipe(map((response: T) => lowercaseFirstLetterKeys(response)));
}
