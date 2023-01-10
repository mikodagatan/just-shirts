import tw from "tailwind-styled-components";

export enum Color {
  primary = "primary",
  danger = "danger",
  success = "success",
  warning = "warning",
  dark = "dark",
}

export interface ThemeProps {
  $color: Color;
}

const colors = {
  primary: "text-blue-700 bg-blue-100 dark:bg-gray-800 dark:text-blue-400",
  danger: "text-red-400 bg-red-100 dark:bg-gray-800 dark:text-red-400",
  success: "text-green-700 bg-green-100 dark:bg-gray-800 dark:text-green-400",
  warning:
    "text-yellow-700 bg-yellow-100 dark:bg-gray-800 dark:text-yellow-300",
  dark: "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:bg-gray-300",
};

export const Theme = tw.div<ThemeProps>`
  ${(p) => colors[Color[p.$color]]}  
`;
