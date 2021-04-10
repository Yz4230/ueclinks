const normalizeString = (targetString: string) =>
  targetString.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s: string) =>
    String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  );

export { normalizeString };
