export const getPageFromQueryParams = (url: string): number => {
  const params = new URL(url).searchParams;
  return parseInt(params.get("page") || "1", 10);
};
