import React, { createContext, useContext, useEffect, useState } from "react";
import { ContexType } from "../types";
import { FeedRequest, Post } from "../types/publication";

const AppContext = createContext<ContexType>({
  feed: [],
  setFeed: () => {},
  getFeed: () => {},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [feed, setFeed] = useState<Post[]>();

  const getFeed = async () => {
    // const request = await fetch(
    //   "http://192.168.1.5:3000/api/publication/feed",
    //   {
    //     method: "GET",
    //   },
    // );
    // const data: FeedRequest = await request.json();
    // setFeed(data.feed);
    // console.log(data.feed);
    console.log("hola mundo");
  };

  return (
    <AppContext.Provider
      value={{
        feed,
        setFeed,
        getFeed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
