import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./assets/Data/videos.json";
import VideoImage from "./components/VideoImage/VideoImage";
import RestofVideo from "./components/RestOfVideo/RestOfVideo";
import { useState } from "react";
import VideoList from "./components/VideoList/VideoList";
import videoDetail from './assets/Data/video-details.json'
console.log(videos);

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  return (
    <>
      <Header />
      <VideoImage video={currentVideo} />
      <div className="desktop-grouping">
      <RestofVideo currentVideo={currentVideo} />
      <VideoList videos={videoDetail} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}  />
      </div>
    </>
  );
}

export default App;
