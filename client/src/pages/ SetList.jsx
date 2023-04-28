import WreckMe from '../assets/Wreck-Me.wav'
import SweetChild from '../assets/Sweet-Child.wav'
import HashPipe from '../assets/Hash-Pipe.wav'
import InterstateLove from '../assets/Interstate-Love.wav'
import { useState } from 'react'

export default function SetList() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [wreckMe, setWreckMe] = useState({
    audio: new Audio(WreckMe),
  })
  const [sweetChild, setSweetChild] = useState({
    audio: new Audio(SweetChild),
  })
  const [hashPipe, setHashPipe] = useState({
    audio: new Audio(HashPipe),
  })
  const [interstateLove, setInterstateLove] = useState({
    audio: new Audio(InterstateLove),
  })


  function playPause(x) {
    if (x == 1) {
      if (isPlaying) {
        wreckMe.audio.pause()
        setIsPlaying(false)
      } else {
        wreckMe.audio.play()
        setIsPlaying(true)
      }
    } else if (x === 2) {
      if (isPlaying) {
        sweetChild.audio.pause()
        setIsPlaying(false)
      } else {
        sweetChild.audio.play()
        setIsPlaying(true)
      }
    } else if (x === 3) {
      if (isPlaying) {
        hashPipe.audio.pause()
        setIsPlaying(false)
      } else {
        hashPipe.audio.play()
        setIsPlaying(true)
      }
    } else if (x === 4) {
      if (isPlaying) {
        interstateLove.audio.pause()
        setIsPlaying(false)
      } else {
        interstateLove.audio.play()
        setIsPlaying(true)
      }
    }
  }
  function restart(x) {
    if (x === 1) {
      wreckMe.audio.load()
      setIsPlaying(false)
    } else if (x === 2) {
      sweetChild.audio.load()
      setIsPlaying(false)
    } else if (x === 3) {
      hashPipe.audio.load()
      setIsPlaying(false)
    } else if (x === 4) {
      interstateLove.audio.load()
      setIsPlaying(false)
    }
  }

  return (
    <div>
      <h1>Set List</h1>
      <p>
        {isPlaying ?
          "Song is Playing" :
          "Song is Paused"}
      </p>
      <div className="song TP">
        <div className="songInfo">
          <h2> Wreck Me Cover</h2>
          <h3>Orignial song by Tom Petty & The Heartbreakers</h3>
          <button onClick={() => playPause(1)}>Play | Pause</button>
          <button onClick={() => restart(1)}>Restart</button></div>
      </div>
      <div className="song GnR">
        <div className="songInfo">
          <h2> Sweet Child O' Mine Cover</h2>
          <h3>Orignial song by Guns N' Roses</h3>
          <button onClick={() => playPause(2)}>Play | Pause</button>
          <button onClick={() => restart(2)}>Restart</button>
        </div>
      </div>
      <div className="song W">
        <div className="songInfo">
          <h2> Hash Pipe Cover</h2>
          <h3>Orignial song by Weezer</h3>
          <button onClick={() => playPause(3)}>Play | Pause</button>
          <button onClick={() => restart(3)}>Restart</button>
        </div>
      </div>
      <div className="song STP">
        <div className="songInfo">
          <h2> Interstate Love Cover</h2>
          <h3>Orignial song by Stone Temple Pilots</h3>
          <button onClick={() => playPause(4)}>Play | Pause</button>
          <button onClick={() => restart(4)}>Restart</button>
        </div>
      </div>
    </div>
  )
}
