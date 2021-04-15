import { isURL, normalizeString } from "./utils";

describe("normalizeString()", () => {
  test("ａ", () => {
    const targetString = "ａ";
    expect(normalizeString(targetString)).toEqual("a");
  });

  test("Ａ", () => {
    const targetString = "Ａ";
    expect(normalizeString(targetString)).toEqual("A");
  });

  test("１", () => {
    const targetString = "１";
    expect(normalizeString(targetString)).toEqual("1");
  });

  test("full-width whitespace", () => {
    const targetString = "　";
    expect(normalizeString(targetString)).toEqual(" ");
  });
});

describe("isURL()", () => {
  test("http + example.com", () => {
    const targetString = "http://example.com";
    expect(isURL(targetString)).toBeTruthy();
  });

  test("https + example.com", () => {
    const targetString = "https://example.com";
    expect(isURL(targetString)).toBeTruthy();
  });

  test("disallow no protocol", () => {
    const targetString = "example.com";
    expect(isURL(targetString)).toBeFalsy();
  });

  test("disallow no domain", () => {
    const targetString = "https://example";
    expect(isURL(targetString)).toBeFalsy();
  });

  test("allow trailing slash", () => {
    const targetString = "https://example.com/";
    expect(isURL(targetString)).toBeTruthy();
  });
});
