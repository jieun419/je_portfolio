"use client";
import Image from 'next/image';
import tw from "tailwind-styled-components";
import styled from "styled-components";
import type { AppProps } from "next/app";

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BgText = tw.p`
  flex
  align-cetner
  text-white
`;

export default function Main({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <BgText>Front-End</BgText>
      <h2>프론트엔드 개발자 최지은입니다.</h2>
      <p>사용자를 생각하는 역지사지 마인드,</p>
      <p>포기하지 않고 책임감있게 일하는 개발자입니다.</p>
      <Image src="/jieun_img.png" alt={''} width={409} height={630} />
    </MainContainer>
  )
}
