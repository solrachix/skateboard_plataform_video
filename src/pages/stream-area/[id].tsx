import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'

import { Container } from '@/styles/pages/StreamArea'
import Avatar from '@/components/Avatar'
import axios from 'axios'
import Video from '@/components/Video'

const chat = [
  {
    name: 'Wijaya Adabi',
    avatar:
      'https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    comment: 'Lorem ipsum clor sit, ame conse quae debitis'
  },
  {
    name: 'Johny Wise',
    avatar:
      'https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    comment: 'Suscipit eos atque voluptates labore'
  },
  {
    name: 'Budin Hankim',
    avatar:
      'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    comment: 'Dicta quidem sunt adipisci'
  },
  {
    name: 'Tomas Hope',
    avatar:
      'https://images.pexels.com/photos/1870163/pexels-photo-1870163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    comment: 'recusandae doloremque aperiam alias molestias'
  },
  {
    name: 'Gerard Will',
    avatar:
      'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    comment: 'Dicta quidem sunt adipisci'
  },
  {
    name: 'Jhony wize',
    avatar:
      'https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    comment: 'recusandae doloremque aperiam alias molestias'
  }
]

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

type HomeStaticProps = { video: Video }
type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

export default function StreamArea({ video }: HomeProps) {
  return (
    <Container className="stream-area">
      <div className="video-stream">
        <Video src={video.url} />

        <div className="video-detail">
          <div className="video-content">
            <div
              className="video-p-wrapper anim"
              // style="--delay: .1s"
            >
              <Avatar
                className="video-author video-p"
                img={video.author.avatar}
              />

              <div className="video-p-detail">
                <div className="video-p-name">{video.author.name}</div>
                <div className="video-p-sub">1,980,893 subscribers</div>
              </div>
              <div className="button-wrapper">
                <button className="like">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z" />
                  </svg>
                  Share
                </button>
                <button className="like red">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z"
                    />
                  </svg>
                  Liked
                </button>
              </div>
            </div>
            <div
              className="video-p-title anim"
              // style="--delay: .2s"
            >
              {video.title}
            </div>
            <div
              className="video-p-subtitle anim"
              // style="--delay: .3s"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus illum tempora consequuntur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Debitis earum velit accusantium
              maiores qui sit quas, laborum voluptatibus vero quidem tempore
              facilis voluptate tempora deserunt!
            </div>
            <div
              className="video-p-subtitle anim"
              // style="--delay: .4s"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laborum qui dolorum fugiat eius accusantium repellendus
              illum tempora consequuntur. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>

      <div className="chat-stream">
        <div className="chat video">
          <div className="chat header anim">
            Live Chat
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.212 7.762c0 2.644-2.163 4.763-4.863 4.763-2.698 0-4.863-2.119-4.863-4.763C4.486 5.12 6.651 3 9.35 3c2.7 0 4.863 2.119 4.863 4.762zM2 17.917c0-2.447 3.386-3.06 7.35-3.06 3.985 0 7.349.634 7.349 3.083 0 2.448-3.386 3.06-7.35 3.06C5.364 21 2 20.367 2 17.917zM16.173 7.85a6.368 6.368 0 01-1.137 3.646c-.075.107-.008.252.123.275.182.03.369.048.56.052 1.898.048 3.601-1.148 4.072-2.95.697-2.675-1.35-5.077-3.957-5.077a4.16 4.16 0 00-.818.082c-.036.008-.075.025-.095.055-.025.04-.007.09.019.124a6.414 6.414 0 011.233 3.793zm3.144 5.853c1.276.245 2.115.742 2.462 1.467a2.107 2.107 0 010 1.878c-.531 1.123-2.245 1.485-2.912 1.578a.207.207 0 01-.234-.232c.34-3.113-2.367-4.588-3.067-4.927-.03-.017-.036-.04-.034-.055.002-.01.015-.025.038-.028 1.515-.028 3.145.176 3.747.32z"
                />
              </svg>
              15,988 people
            </span>
          </div>
          <div className="message-container">
            {chat.map((message, index) => (
              <div
                key={message.name + index}
                className="message anim"
                // style="--delay: .{index}s"
              >
                <Avatar className="video-author video-p" img={message.avatar} />
                <div className="msg-wrapper">
                  <div className="msg__name video-p-name">{message.name}</div>
                  <div className="msg__content video-p-sub">
                    {message.comment}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="chat footer anim"
            // style="--delay: .1s"
          >
            <input type="text" placeholder="Write your message" />
          </div>
        </div>
        <div className="chat vid__container">
          <div
            className="chat vid__title anim"
            // style="--delay: .3s"
          >
            Related Videos
          </div>
          <div
            className="chat vid anim"
            // style="--delay: .4s"
          >
            <div className="chat vid__wrapper">
              <img
                className="chat vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat vid__content">
                <div className="chat vid__name">
                  Prepare for your first skateboard jump
                </div>
                <div className="chat vid__by">Jordan Wise</div>
                <div className="chat vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div
            className="chat vid anim"
            // style="--delay: .5s"
          >
            <div className="chat vid__wrapper">
              <img
                className="chat vid__img"
                src="https://iamaround.it/wp-content/uploads/2015/02/pexels-photo-4663818.jpeg"
              />
              <div className="chat vid__content">
                <div className="chat vid__name">
                  Prepare for your first skateboard jump
                </div>
                <div className="chat vid__by">Jordan Wise</div>
                <div className="chat vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div
            className="chat vid__button anim"
            // style="--delay: .6s"
          >
            See All related videos (32)
          </div>
        </div>
      </div>
    </Container>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const video = await axios.get<Video>(
    `${process.env.SERVER_URL}/api/videos?id=${id}`
  )
  return {
    props: { video: video.data }
  }
}
