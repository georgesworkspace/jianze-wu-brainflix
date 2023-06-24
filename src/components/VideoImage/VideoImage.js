import './VideoImage.scss'

export default function VideoImage({video}) {
  const { image } = video
  return (
    <>
      <div className="main__video-image-div">
        <video controls poster={image} className="main__video-image" src={image} alt="random im"></video>
      </div>
    </>
  );
  }
  