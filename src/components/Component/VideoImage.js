export default function VideoImage({Videos}) {
  const { image } = Videos[0];
  return (
    <>
      <div className="main__video-image-div">
        <img className="main__video-image" src={image} alt="random im" />
      </div>
    </>
  );
  }
  