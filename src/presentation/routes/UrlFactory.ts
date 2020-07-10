type NumberUrl = number | string;
export const UrlFactory = {
  home: ()=> `/home`,
  rgb: (r: NumberUrl, g: NumberUrl, b: NumberUrl)=>`/rgb/${r}/${g}/${b}`,
  hsl: (h: NumberUrl, s: NumberUrl, l: NumberUrl)=>`/hsl/${h}/${s}/${l}`
};