const videos = [
  {
    id: 123,
    title: 'Basic how to ride your skateboard comfortly',
    url:
      'https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761',
    time: '8 min',
    views: '54K views',
    posted: '1 week ago',
    author: {
      avatar:
        'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      name: 'Andy William'
    }
  },
  {
    id: 124,
    title: 'Prepare for your first skateboard jump',
    url:
      'https://player.vimeo.com/external/449972745.sd.mp4?s=9943177fe8a6147b7bc4598259401f06ec57878a&profile_id=139&oauth2_token_id=57447761',
    time: '5 min',
    views: '42K views',
    posted: '1 week ago',
    author: {
      avatar:
        'https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      name: 'Gerard Bind'
    }
  },
  {
    id: 125,
    title: 'Basic equipment to play skateboard safely',
    url:
      'https://player.vimeo.com/external/436553499.sd.mp4?s=0e44527f269278743db448761e35c5e39cfaa52c&profile_id=139&oauth2_token_id=57447761',
    time: '7 min',
    views: '64K views',
    posted: '2 week ago',
    author: {
      avatar:
        'https://images.pexels.com/photos/1870163/pexels-photo-1870163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      name: 'John Wise'
    }
  },
  {
    id: 126,
    title: 'Tips to playing skateboard on the ramp',
    url:
      'https://player.vimeo.com/external/361861493.sd.mp4?s=19d8275ca755d653042a87ef28b2f0b2eabf57d0&profile_id=139&oauth2_token_id=57447761',
    time: '6 min',
    views: '50K views',
    posted: '1 week ago',
    author: {
      avatar:
        'https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      name: 'Budi Hakim'
    }
  }
]

export default function (req, res) {
  if (req.query.id) {
    const response = videos.find(
      video => Number(video.id) === Number(req.query.id)
    )

    return response
      ? res.status(200).json(response)
      : res.status(404).json({ message: 'Video not found.' })
  }

  return res.status(200).json(videos)
}
