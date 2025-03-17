import { Post } from "./publication";

export type ContexType = {
  feed: Post[] | undefined;
  setFeed: (test: Post[]) => void;
  getFeed: (mensaje: string) => void;
};
