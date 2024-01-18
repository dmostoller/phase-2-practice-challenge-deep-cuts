import React from 'react'
import Track from './Track'

function TracksList({tracks, onDelete}) {
  const catalog = tracks.map((track) => {
    return <Track 
    key={track.id} 
    id={track.id}
    image={track.image}
    title={track.title}
    BPM={track.BPM}
    artist={track.artist}
    onDelete={onDelete}
    />
  })
  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>
          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {catalog}
      </tbody>
    </table>
  )
}

export default TracksList