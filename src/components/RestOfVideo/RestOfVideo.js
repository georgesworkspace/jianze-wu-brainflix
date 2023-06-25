import avatar from "../../assets/Images/Mohan-muruge.jpg";
import './RestOfVideo.scss';
import details from '../../assets/Data/video-details.json';
import view from '../../assets/Icons/views.svg';
import like from '../../assets/Icons/likes.svg';
export default function RestofVideo({ currentVideo }) {


  const videoDetails = details.find(detail => detail.id === currentVideo.id)



  const { comments, channel, timestamp, likes, title, views, description } =
   videoDetails;
  return (
    <main>
      <div className="main__title">
        <div className="main__title--bold">
          <p className="main__title-content">{title}</p>
        </div>
        <div className="main__video-detail">
          <div className="main__subtitle">
            
            <p className="main__channel">{channel}</p>
            <p className="main__date">{gettodaydate(timestamp)}</p>
          </div>
          <div className="main__viewbar">
            <div className="main__views-div">
              <img className="main__views-image" src={view} alt="broken" />
            <p className="main__views">{views}</p>
            </div> 
            <div className="main__likes-div">
              <img  className="main__likes-image"src={like} alt="broken"/>
            <p className="main__likes">{likes}</p>
            </div>
          </div>
        </div>
      </div>
      <form className="form">
        <p className="form__title">3 Comments</p>
        <p className="form__label">
          JOIN THE CONVERSATION
          </p>
        <div className="comments__input">
          <img className="form__image" src={avatar} />
          
            <input
              className="form__input-text"
              type="text"
              placeholder="Add a new comment"
            ></input>
            
          
        </div>
        <div className="form__button-box">
        <button className="form__button">COMMENT</button>
        </div>
      </form>
      <div className="comments-list">
        {comments.map((comment) => {
          return (
            <div className="comments__detail" key={comment.id}>
              <div className="comments__header">
                <p className="comments__username">{comment.name}</p>
                <p className="comments__date">
                  {gettodaydate(comment.timestamp)}
                </p>
              </div>
              <div className="comments__content">
              <img className="comments__image--placeholder" src={avatar} alt="broken"></img>
              <p className="comments__text">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function gettodaydate(today) {
  let exactdate = new Date(today);

  let date = String(exactdate.getDate());
  let month = String(exactdate.getMonth() + 1);

  let year = String(exactdate.getFullYear());
  let dayzero = "";
  let monthzero = "";
  if (Number(date) < 10) {
    dayzero = "0";
  }
  if (Number(date) < 10 && Number(month) < 10) {
    dayzero = "0";
    monthzero = "0";
  }
  if (Number(month) < 10) {
    monthzero = "0";
  }
  exactdate = `${dayzero}${date}/${monthzero}${month}/${year}`;

  return exactdate;
}