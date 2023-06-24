import "./VideoList.scss";

export default function VideoList({ videos, setCurrentVideo, currentVideo}) {
  const notSelectedVideo = videos.filter(vid => vid.id !== currentVideo.id);
  return (
    <>
      <h1>NEXT VIDEOS</h1>
      <ul className="Video-List">
        {notSelectedVideo.map((video) => {
          return (
            <li className="Video-List--detail" key={video.id} onClick={() => {
              console.log(video)
              setCurrentVideo(video)
            }}>
              <img src={video.image} />
              <div className="Video-List-title">
                <p className="Video-List--bold">{video.title}</p>
                <p className="Video-List--bold">{video.regular}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
