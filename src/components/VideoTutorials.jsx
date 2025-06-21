import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './VideoTutorials.css';

const playlists = {
  mechanical: { id: 'PLXUAh2kKFjXsr6pA4_3CDnfBD0souzGU2', label: 'Mechanical Engineering' },
  electrical: { id: 'PL_c9BZzLwBRKFRIBWEWYCnV4Lk9HE3eYJ', label: 'Electrical Engineering' },
  civil: { id: 'PLC77007E23FF423C6', label: 'Civil Engineering' },
  general: { id: 'PL_rRZ04fMg6ZMW0JXhkyQEBewo8WZJyY', label: 'General Engineering' },
};

const VideoTutorials = () => {
  const [stream, setStream] = useState('general');

  const opts = {
    height: '360',
    width: '640',
    playerVars: { autoplay: 0, controls: 1 },
  };

  return (
    <div className="vt-container">
      <div className="vt-header">
        <h2>Tutorial Videos</h2>
        <select value={stream} onChange={e => setStream(e.target.value)}>
          {Object.entries(playlists).map(([key, pl]) =>
            <option key={key} value={key}>{pl.label}</option>
          )}
        </select>
      </div>
      <div className="vt-player">
        <YouTube 
          videoId="" 
          opts={{
            ...opts,
            playerVars: { ...opts.playerVars, listType: 'playlist', list: playlists[stream].id }
          }} 
        />
      </div>
    </div>
  );
};

export default VideoTutorials;
