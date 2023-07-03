import Header from "../../components/Header/Header";
import uploadimage from "../../assets/Images/Upload-video-preview.jpg";
import "./Upload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [videoTitle, setVideoTitle] = useState("");
  const navigate = useNavigate();
  const [videoDescription, setVideoDescription] = useState("");
  function handleChangeTitle(event) {
    setVideoTitle(event.target.value);
  }
  function handleChangeDescription(event) {
    setVideoDescription(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    navigate(`/`);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("success");
    navigate(`/`);
  };

  return (
    <>
      <Header />

      <div className="title">
        <p className="title__content">Upload Video</p>
      </div>
      <section className="upload">
        <div className="video">
          <p className="video-text">VIDEO THUMBNAIL</p>
          <img className="video-image" src={uploadimage} />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label className="video-title">
              <input
                type="text"
                placeholder="Add a title to your video"
                name="video-title"
                onChange={handleChangeTitle}
                value={videoTitle}
              />
            </label>
            <label className="video-description">
              <input
                type="text"
                placeholder="Add a descritption to your video"
                name="video-description"
                onChange={handleChangeDescription}
                value={videoDescription}
              />
            </label>
            <div className="button-div">
              <button className="button-cancel" onClick={handleClick}>
                cancel
              </button>
              <button className="button-upload" type="submit">
                upload
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Upload;
