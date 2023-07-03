import "./VideoList.scss";

import { Link } from "react-router-dom";
export default function VideoList({ videos, currentVideo }) {
  const notSelectedVideo = videos.filter((vid) => vid.id !== currentVideo.id);
  return (
    <>
      <div className="Video-div">
        <h1 className="Video__header">NEXT VIDEOS</h1>
        <ul className="Video-List">
          {notSelectedVideo.map((video) => {
            return (
              <li className="Video-List--detail" key={video.id}>
                <Link to={`/${video.id}`}>
                  <img src={currentVideo.image} />

                  <div className="Video-List-title">
                    <p className="Video-List--bold">{currentVideo.title}</p>
                    <p className="Video-List--regular">{currentVideo.channel}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
