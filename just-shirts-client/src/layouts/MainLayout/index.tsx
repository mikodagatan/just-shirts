import * as React from "react";
import { Container } from "./styles";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <Container>{children}</Container>;
};
