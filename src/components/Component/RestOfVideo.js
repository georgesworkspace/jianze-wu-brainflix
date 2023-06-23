import avatar from "../../assets/Images/Mohan-muruge.jpg"
export default function RestofVideo({ Videos }) {
  const { comments, channel, timestamp, likes, title, views, description } =
    Videos[0];
  return (
    <main>
      <div className="main__title">
        <div className="main__title--bold">
          <p className="main__title-content">{title}</p>
        </div>
        <div className="main__subtitle">
          <div className="main__subtitle">
            <p className="main__channel">{channel}</p>
            <p className="main__date">{date}</p>
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
           <img className="main__comments-image" src={avatar}/>
           <label><input className="main__comments-input" type="text"></input></label>
        </div>
      </div>
    </main>
  );
}
