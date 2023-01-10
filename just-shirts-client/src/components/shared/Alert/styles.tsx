import tw from "tailwind-styled-components";
import { Theme } from "../../../theme";

export const AlertContainer = tw(Theme)`
  p-4 
  m-2 
  text-sm 
  rounded-lg 
  flex
  flex-row
`;

export const AlertTitle = tw.span`
  font-medium
  pr-4
`;

export const AlertClose = tw.div`
  px-6 
  h-1 
  w-1
  cursor-pointer
  hover:text-lg
`;
