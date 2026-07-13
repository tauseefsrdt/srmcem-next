import { ReactNode } from "react";

export type HeadingItem = {
  h1: string;
  para: string;
};

export type TabItem = {
  id: number;
  title: string;
  content: ReactNode;
};

export type tabDataType = {
  heading: HeadingItem[];
  tabs: TabItem[];
};

export {};
