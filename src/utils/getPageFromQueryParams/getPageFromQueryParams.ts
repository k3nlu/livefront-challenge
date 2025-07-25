export const getPageFromQueryParams = (url: string) => {
  const params = new URL(url).searchParams;
  const pageNumber = params.get('page');
  if (!pageNumber) {
    return undefined;
  }
  return Number(pageNumber);
};
