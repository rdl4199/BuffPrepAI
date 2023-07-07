import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../NavBar';
import { CSSTransition } from 'react-transition-group';
import './Video.css'

const VideoPlayer = () => {
  const videoRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupLines, setPopupLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Load the popupLines when the component mounts
  useEffect(() => {
    const loadPopupLines = async () => {
      const response = await fetch('./summarize.txt');
      const text = await response.text();
      const lines = text.split('\n');
      setPopupLines(lines);
    };

    loadPopupLines();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    let intervalId;
    const timeupdateListener = () => {
      if (video.currentTime >= (currentLineIndex + 1) * 100) {
        setShowPopup(true);
        setCurrentLineIndex(prevIndex => prevIndex + 1);

        // Hide the popup after 5 seconds
        intervalId = setInterval(() => setShowPopup(false), 5000);
      }
    };

    video.addEventListener('timeupdate', timeupdateListener);

    return () => {
      video.removeEventListener('timeupdate', timeupdateListener);
      clearInterval(intervalId);
    };
  }, [currentLineIndex]);

  return (
    <div className='VideoPlayer'>
        <NavBar></NavBar>
        <div className='app-container'>
            <video ref={videoRef} src='./TED_Talk.mp4' controls />
              <CSSTransition
                in={showPopup}
                timeout={300}
                classNames="popup"
                unmountOnExit
              >
                {showPopup && <div className='popup'>{popupLines[currentLineIndex]}</div>}
              </CSSTransition>
            <button className='uploadButton'><img className='uploadImg' src='./uploadButton.png' ></img></button>
        </div>
    </div>
  );
};

export default VideoPlayer;
