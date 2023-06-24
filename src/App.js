import "./App.css";
import Header from "./components/Header/Header";
import videos from "./assets/Data/videos.json";
import VideoImage from "./components/VideoImage/VideoImage";
import RestofVideo from "./components/RestOfVideo/RestOfVideo";
import { useState } from "react";
import VideoList from "./components/VideoList/VideoList";
console.log(videos);

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  return (
    <>
      <Header />
      <VideoImage video={currentVideo} />
      <RestofVideo currentVideo={currentVideo} />
      <VideoList videos={videos} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}  />
    </>
  );
}

export default App;
