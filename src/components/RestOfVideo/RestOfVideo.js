import avatar from "../../assets/Images/Mohan-muruge.jpg";
import './RestOfVideo.scss'
import details from '../../assets/Data/video-details.json'
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
        <div className="main__subtitle">
          <div className="main__subtitle">
            <p className="main__channel">{channel}</p>
            <p className="main__date">{gettodaydate(timestamp)}</p>
          </div>
          <div className="main__viewbar">
            <p className="main__views">{views}</p>
            <p className="main__likes">{likes}</p>
          </div>
        </div>
      </div>
      <div className="main__comments">
        <p className="main__comments-title">3 Comments</p>
        <div className="main__comments-input">
          <img className="main__comments-image" src={avatar} />
          <label className="main__comments-label">
          JOIN THE CONVERSATION
            <input
              className="main__comments-input"
              type="text"
              placeholder="Add a new comment"
            ></input>
            
          </label>
        </div>
        <div className="button-div">
        <button className="main__comments-button">COMMENT</button>
        </div>
      </div>
      <div className="main__comment-list">
        {comments.map((comment) => {
          return (
            <div className="main__comment--detail" key={comment.id}>
              <div className="main__comment-header">
                <p className="main__comment-username">{comment.name}</p>
                <p className="main__comment-date">
                  {gettodaydate(comment.timestamp)}
                </p>
              </div>
              <p className="main__comment-text">{comment.comment}</p>
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