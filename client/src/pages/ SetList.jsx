import sound from '../assets/Wreck-Me.wav'
import { useState } from 'react'

export default function SetList() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [state, setState] = useState({
    audio: new Audio(sound),
  });


  function playPause() {
    if (isPlaying) {
      state.audio.pause()
      setIsPlaying(false)
    } else {
      state.audio.play()
      setIsPlaying(true)
    }
  }
  function restart() {
    state.audio.load()
    setIsPlaying(false)
  }
  return (
    <div>
      <h1>Set List</h1>
      <div className="song">
        <h2> Wreck Me Cover</h2>
        <h3>Orignial song by Tom Petty & The Heartbreakers</h3>
        <p>
          {isPlaying ?
            "Song is Playing" :
            "Song is Paused"}
        </p>
        <button onClick={playPause}>Play | Pause</button>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  )
}
