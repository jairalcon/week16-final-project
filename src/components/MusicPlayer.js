import React from 'react'
import BackgroundMusic from './assets/F1.mp3'
import ReactAudioPlayer from 'react-audio-player'

const MusicPlayer = () => {
  //https://stackoverflow.com/questions/37949895/stop-audio-on-route-change-in-react
  // // the audio variable needs to be stored in a ref in order to access it across renders
  // let audio = useRef();
  // // start the audio (using the .current property of the ref we just created) when the component mounts using the useEffect hook
  // useEffect(() => {
  //     audio.current = new Audio(waves)
  //     audio.current.play()
  // }, [])
  // // Stop the audio when the component unmounts
  // // (not exactly what you asked re React Router, but similar idea)
  // useEffect(() => {
  //     return () => {
  //         audio.current.pause()
  //         console.log("in cleanup")
  //     }
  // }, [])

  return (
    <>
      <ReactAudioPlayer src={BackgroundMusic} autoPlay controls />
    </>
  )
}

export default MusicPlayer

// https://www.npmjs.com/package/react-audio-player
