import Header from "../../components/Header/Header";

import VideoImage from "../../components/VideoImage/VideoImage";
import RestofVideo from "../../components/RestOfVideo/RestOfVideo";
import { useState } from "react";
import VideoList from "../../components/VideoList/VideoList";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const url = "https://project-2-api.herokuapp.com";
const key = "fa784ec4-0791-4346-bb3c-dcb2f409f8ae";
function Video() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    axios.get(`${url}/videos?api_key=${key}`).then((response) => {
      console.log(response);
      setVideos(response.data);
    });
  }, []);
  const [currentVideo, setCurrentVideo] = useState(null);

  let {id}  = useParams();
  

  useEffect(() => {
    // if id is null, set id to id of first video in videos
    console.log("entered")
    if (!id) {
    console.log("entered if")
     
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=73d1ea59-3dc3-4c54-b026-571cbed0de95`
        )
        .then((response) => {
          console.log(response.data)
          setCurrentVideo(response.data);
        });
    } else {
      console.log("entered else")
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=73d1ea59-3dc3-4c54-b026-571cbed0de95`
        )
        .then((response) => {
          console.log(id);
          setCurrentVideo(response.data);
        });
    }
  }, [id]);

  if (!videos || !currentVideo) {
    return <>...Loading...</>;
  }
  return (
    <>
      <Header />
      <VideoImage video={currentVideo} />
      <div className="desktop-grouping">
        <RestofVideo currentVideo={currentVideo} />
        <VideoList videos={videos} currentVideo={currentVideo} />
      </div>
    </>
  );
}
export default Video;
