export interface MyObject {
  [key: string]: string;
}

export function hasEmptyStrings(obj: MyObject): boolean {
  for (let key in obj) {
    if (typeof obj[key] === 'string' && obj[key].trim() === '') {
      return true; 
    }
  }
  return false; 
}