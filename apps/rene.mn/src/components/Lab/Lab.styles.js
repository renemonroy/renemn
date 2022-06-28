import tw, { styled } from "twin.macro";

export const Lab = styled.div`
  ${() => tw`flex flex-row h-screen items-stretch`}

  p {
    font-family: BlinkMacSystemFont, Inter, Segoe UI, Helvetica Neue, sans-serif;
    ${() => tw`text-base leading-7`}
  }

  h3 {
    ${() => tw`font-raleway font-normal text-3xl mt-8 mb-4`}
  }
`;

export const Main = tw.main`
  flex-auto
`;

export const Article = tw.div`
  max-w-screen-sm mx-auto p-5
`;

export const ModifiedTime = tw.span`
  block font-raleway font-medium leading-3 mb-4 mt-2 text-gray-700 text-right text-xs
`;
