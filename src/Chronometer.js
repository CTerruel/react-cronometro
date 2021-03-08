import { useState } from 'react'
import Display from './Display'
import Keyboard from './Keyboard'

const Chronometer = () => {
  const [state, setState] = useState({ h: 0, m: 0, s: 0, ms:0 })
  const [timer, setTimer] = useState()
  const [playing, setPlaying] = useState(false)

  let hour = state.h
  let minutes = state.m
  let seconds = state.s
  let milliSeconds = state.ms

  const update = () => {
    milliSeconds++

    if (milliSeconds >= 100) {
      milliSeconds = 0
      seconds++
    }

    if (seconds >= 60) {
      seconds = 0
      minutes++
    }

    if (minutes >= 60) {
      minutes = 0
      hour++
    }

    setState({ h: hour, m: minutes, s: seconds, ms: milliSeconds })
  }

  const handlePlay = () => {
    setPlaying(true)
    update()
    setTimer(setInterval(update, 10))
  }

  const handlePause = () => {
    setPlaying(false)
    clearInterval(timer)
  }

  const handleStop = () => {
    setPlaying(false)
    clearInterval(timer)

    hour = 0
    minutes = 0
    seconds = 0
    milliSeconds = 0

    setState({ h: hour, m: minutes, s: seconds, ms: milliSeconds })
  }

  return (
    <div className="container">
      <Display state={state} />
      <Keyboard playing={playing}
        onPlay={handlePlay} 
        onPause={handlePause} 
        onStop={handleStop} />
    </div>
  )
}

export default Chronometer