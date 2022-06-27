import tw from "twin.macro";

export const Lab = tw.div`
  flex flex-row h-screen items-stretch
`;

export const Main = tw.main`
  flex-auto
`;

export const Article = tw.div`
  max-w-screen-md mx-auto p-5
`;

export const ModifiedTime = tw.span`
  block font-raleway font-medium leading-3 mb-4 mt-2 text-gray-700 text-right text-xs
`;
