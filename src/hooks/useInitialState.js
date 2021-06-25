import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []); // Es ncesario el [] para evitar un LOOP
  return videos;
};

export default useInitialState;
