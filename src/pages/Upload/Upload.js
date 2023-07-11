import Header from "../../components/Header/Header";
import uploadimage from "../../assets/Images/Upload-video-preview.jpg";
import "./Upload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    axios
    .post('http://localhost:8080/videos', {title: videoTitle,description:videoDescription})
    .then((response) => {
console.log('ok')
    }).catch(() => {
      console.log('oh no')
    });


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
        <div className="form-upload">
          <form onSubmit={handleSubmit}>
            <label className="video-title">TITLE YOUR VIDEO
              <textarea
                type="text"
                placeholder="Add a title to your video"
                name="video-title"
                onChange={handleChangeTitle}
                value={videoTitle}
                className="title-input"
              />
            </label>
            <label className="video-description">  ADD A VIDEO DESCRIPTION
              <textarea
                type="text"
                placeholder="Add a descritption to your video"
                name="video-description"
                onChange={handleChangeDescription}
                value={videoDescription}
                className="description-input"
              />
            </label>
            <div className="button-div">
       
              <button className="button-upload" type="submit">
                PUBLISH
              </button>
              <button className="button-cancel" onClick={handleClick}>
                CANCEL
              </button>
            </div>
          </form>
          <div className="button-div--hidden">
       
       <button className="button-upload--hidden" type="submit">
         PUBLISH
       </button>
       <button className="button-cancel--hidden" onClick={handleClick}>
         CANCEL
       </button>
     </div>
        </div>
      </section>
    </>
  );
}
export default Upload;
