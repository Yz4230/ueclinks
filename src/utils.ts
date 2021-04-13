const normalizeString = (targetString: string) =>
  targetString
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s: string) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    )
    .replace("　", " ");

const isURL = (targetString: string) =>
  /^https?:\/\/([0-9a-z-]+\.)+[a-z]+/.test(targetString);

export { normalizeString, isURL };
