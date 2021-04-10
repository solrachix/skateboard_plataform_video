import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { useEffect, useState, ReactElement } from 'react'
import SEO from '@/components/SEO'
import { Container, Blogs, Videos } from '@/styles/pages/Home'

// interface HomeStaticProps {}

// type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

const videos = [
  {
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
export default function Home(): ReactElement {
  const handleVideoHover = e => {
    const video = e.target
    video && video.play()
  }
  const handleVideoLeave = e => {
    const video = e.target
    video && video.pause()
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

// export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
//   return {
//     revalidate: 86400,
//     props: {}
//   }
// }
