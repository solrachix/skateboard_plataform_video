import { useEffect, useRef } from 'react'

import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import { Container } from './styles'

interface VideoProps {
  src: string
}

function Video({ src }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src,
        type: 'video/mp4'
      }
    ]
  }

  useEffect(() => {
    const video = videoRef.current
    let player = null

    if (video) {
      player = videojs(video, videoJsOptions, () => {
        console.log('onPlayerReady')
      })
    }

    return () => player?.dispose()
  }, [])
  return (
    <Container>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin anim"
        width="640px"
        height="267px"
        controls
        preload="none"
        poster="https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80"
        data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
    </Container>
  )
}

export default Video
