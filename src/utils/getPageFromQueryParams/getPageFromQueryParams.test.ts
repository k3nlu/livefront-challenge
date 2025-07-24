import { getPageFromQueryParams } from "./getPageFromQueryParams";

describe("Get Page Query Params from URL", () => {
  it("should return the page number if it is present in the query params", () => {
    const url = "https://example.com?page=2";
    const page = getPageFromQueryParams(url);
    expect(page).toBe(2);
  });

  it("should return undefined if there is no page number in the query params", () => {
    const url = "https://example.com";
    const page = getPageFromQueryParams(url);
    expect(page).toBeUndefined();
  });
});
