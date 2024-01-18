import React, {useState} from 'react'

const initState = {
  artist: "",
  image: "",
  title: "",
  BPM: "",
};

const AddTrackForm = ({onAddTrack}) => {
  const [formData, setFormData] = useState(initState);

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  function handleAddNewTrack(e) {
    e.preventDefault()
    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData
      })
    })
    .then((r) => r.json())
    .then((track) => {onAddTrack(track)})
    setFormData(initState)
  }
  return (
      <form onSubmit={handleAddNewTrack}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm