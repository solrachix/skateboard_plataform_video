import home from '@/assets/icons/home.svg'
import trending from '@/assets/icons/trending.svg'
import streaming from '@/assets/icons/streaming.svg'
import playlist from '@/assets/icons/playlist.svg'
import bookmark from '@/assets/icons/bookmark.svg'

import liveStream from '@/assets/icons/liveStream.svg'
import tutorial from '@/assets/icons/tutorial.svg'
import competition from '@/assets/icons/competition.svg'
import community from '@/assets/icons/community.svg'

const routes = [
  {
    title: 'MENU',
    routes: [
      {
        path: '/',
        name: 'Discover',
        icon: home
      },
      {
        path: '/#',
        name: 'Trending',
        icon: trending
      },
      {
        path: '/#',
        name: 'Streaming',
        icon: streaming
      },
      {
        path: '/#',
        name: 'Playlist',
        icon: playlist
      },
      {
        path: '/#',
        name: 'Bookmark',
        icon: bookmark
      }
    ]
  },
  {
    title: 'CATEGORY',
    routes: [
      {
        path: '/#',
        name: 'Live Stream',
        icon: liveStream
      },
      {
        path: '/#',
        name: 'Tutorial',
        icon: tutorial
      },
      {
        path: '/#',
        name: 'Competition',
        icon: competition
      },
      {
        path: '/#',
        name: 'Community',
        icon: community
      }
    ]
  }
]

export default routes
