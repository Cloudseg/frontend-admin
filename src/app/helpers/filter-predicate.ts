export function filterPredicate(obj: any, filter: string, columns: string[] = null): boolean {

  const values = columns ? columns.map(key => resolvePath(obj, key)) : Object.values(obj);

  return values.filter(value => value && typeof value !== 'object')
    .map(value => value.toString())
    .join()
    .toLocaleLowerCase()
    .indexOf(filter.toLowerCase()) !== -1;
}

const resolvePath = (object: Object, path: string, defaultValue?: any) =>
  path.split('.').reduce((o, p) => o ? o[p] : defaultValue, object)
