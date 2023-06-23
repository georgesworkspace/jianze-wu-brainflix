
import './App.css';
import Header from './components/Component/Header';
import Videos from './assets/Data/video-details.json';
import VideoImage from './components/Component/VideoImage';
console.log(Videos);
function App() {
  return (
    <>
    <Header/>
    <VideoImage Videos={Videos}/>
    </>
  );
}

export default App;
