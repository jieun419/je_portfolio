import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blackOpacity70: string;
      blackOpacity80: string;
      mainOneColor: string;
      mainTwoColor: string;
      white: string;
      black: string;
      black900: string;
      black700: string;
      gray700: string;
    };
  }
}