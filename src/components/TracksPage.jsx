import React, { useEffect, useState } from 'react';
import Search from './Search';
import AddTrackForm from './AddTrackForm';
import TracksList from './TracksList';

function TracksPage() {
  const [tracks, setTracks] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:8001/tracks")
    .then((r) => r.json())
    .then((tracks) => {setTracks(tracks)})
  }, []);

  const searchResults = tracks.filter(track => {
    return (
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  })
  const addTrack = (newTrack) => {
    setTracks ([...tracks, newTrack])
  }
  const url = "http://localhost:8001/tracks";
  const deleteTrack = (id) => {
    fetch(`${url}/${id}`, { method: "DELETE" });
  };
  const removeTrack = (trackId) => {
    console.log("🚀 ~ TracksPage ~ trackId:", trackId);
    deleteTrack(trackId);
    setTracks(tracks.filter((track) => track.id !== trackId));
  };
  return (
    <div>
      <Search searchQuery={searchQuery} onSearch={setSearchQuery}/>
      <AddTrackForm onAddTrack={addTrack}/>
      <TracksList tracks={searchResults} onDelete={removeTrack}/>
    </div>
  )
}

export default TracksPage