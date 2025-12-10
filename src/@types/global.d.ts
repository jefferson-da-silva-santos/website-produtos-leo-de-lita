import { ReactNode } from "react";

declare global {
  type ContainerChildren = {
    children: ReactNode;
  };
}