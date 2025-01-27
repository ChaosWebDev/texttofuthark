declare module 'texttofuthark' {
  interface Ttf {
    toFuthark(latin: string): string;
    toLatin(futhark: string): string;
  }

  const ttf: Ttf;
  export default ttf;
}