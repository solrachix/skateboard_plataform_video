import React, { ReactElement } from 'react'
import route from 'next/router'

import axios from 'axios'

import SEO from '@/components/SEO'
import { Container, Blogs, Videos } from '@/styles/pages/Home'

interface Video {
  id: number
  title: string
  url: string
  time: string
  views: string
  posted: string
  author: {
    avatar: string
    name: string
  }
}

export default function Home({ videos }: { videos: Video[] }): ReactElement {
  const handleVideoHover = e => {
    const video = e.target
    video && video.play()
  }
  const handleVideoLeave = e => {
    const video = e.target
    video && video.pause()
  }
  const handleVideoClick = (id: number) => {
    route.push(`/stream-area/${id}`)
  }

  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />
      <div
        className="header anim"
        // style="--delay: 0s"
      >
        Discover
      </div>

      <Blogs>
        <div
          className="blog anim"
          //
          // style="--delay: .1s"
        >
          <div className="blog__title">
            How to do Basic Jumping and how to landing safely
          </div>
          <div className="blog_author">
            <div className="author-img author-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <img
                className="author-img"
                src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              />
            </div>
            <div className="author-detail">
              <div className="author-name">Thomas Hope</div>
              <div className="author-info">
                53K views <span className="seperate"></span>2 weeks ago
              </div>
            </div>
          </div>
          <div className="blog_time">7 min</div>
        </div>
        <div
          className="blog anim"
          //
          // style="--delay: .2s"
        >
          <div className="blog__title">Skateboard Tips You need to know</div>
          <div className="blog_author tips">
            <div className="blog_time">7 min</div>
            <div className="author-img author-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <img
                className="author-img"
                src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="author-detail">
              <div className="author-name">Tony Andrew</div>
              <div className="author-info">
                53K views <span></span>2 weeks ago
              </div>
            </div>
          </div>
        </div>
      </Blogs>

      <div
        className="small-header anim"
        // style="--delay: .3s"
      >
        Most Watched
      </div>

      <Videos>
        {videos.map(video => (
          <div
            key={video.title}
            className="video anim"
            onClick={() => handleVideoClick(video.id)}
            // style="--delay: .4s"
          >
            <div className="time">{video.time}</div>
            <div className="wrapper">
              <video
                muted
                onMouseOver={handleVideoHover}
                onMouseLeave={handleVideoLeave}
              >
                <source src={video.url} type="video/mp4" />
              </video>
              <div className="author-img author-wrapper author">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <img className="author-img" src={video.author.avatar} />
              </div>
            </div>
            <div className="by">{video.author.name}</div>
            <div className="name">{video.title}</div>
            <div className="view">
              {video.views}
              <span className="seperate video-seperate"></span>
              {video.posted}
            </div>
          </div>
        ))}
      </Videos>
    </Container>
  )
}

export const getServerSideProps = async () => {
  const videos = await axios.get<Video[]>(
    `${process.env.SERVER_URL}/api/videos`
  )

  return {
    props: {
      videos: videos.data
    }
  }
}

// export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
//   return {
//     revalidate: 86400,
//     props: {}
//   }
// }
