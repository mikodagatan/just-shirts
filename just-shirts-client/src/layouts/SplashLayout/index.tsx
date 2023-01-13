import * as React from "react";
import { Container } from "./styles";

export interface SplashLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: SplashLayoutProps) => {
  return <Container>{children}</Container>;
};
