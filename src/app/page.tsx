"use client";
import Image from 'next/image';
import tw from "tailwind-styled-components";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Main from './pages';

import { GlobalStyle } from "../../styles/global-style";
import { theme } from "../../styles/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}
