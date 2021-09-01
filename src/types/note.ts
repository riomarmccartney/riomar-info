import { ReactNode } from 'react';

export type NoteType = {
  uid: string,
  date: string,
  title: string,
  article: ReactNode,
  caption: ReactNode,
}