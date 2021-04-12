import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-grow: 1;

  padding: 20px 30px 30px;
  margin-bottom: 90px;

  /* .author {
    &-img {
      width: 52px;
      height: 52px;
      border: 1px solid rgb(255 255 255 / 75%);
      padding: 4px;
      border-radius: 50%;
      object-fit: cover;
      &.author-wrapper {
        position: relative;
        flex-shrink: 0;
        svg {
          width: 16px;
          padding: 2px;
          background-color: #fff;
          color: #0daabc;
          border-radius: 50%;
          border: 2px solid #0daabc;
          position: absolute;
          bottom: 5px;
          right: 0;
        }
      }
    }
    &-name {
      font-size: 15px;
      color: #fff;
      font-weight: 500;
      margin-bottom: 8px;
    }
    &-info {
      font-size: 13px;
      font-weight: 400;
      color: #fff;
    }
    &-detail {
      margin-left: 16px;
    }
  } */

  .video-stream {
    width: 65%;
    object-fit: cover;
    transition: 0.3s;
    &:hover & .vjs-big-play-button {
      opacity: 1;
    }
  }

  .video-p {
    margin-right: 12px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 50%;
    position: relative;
    top: 0;
    left: 0;

    .author-img {
      border: 0;
    }

    &-wrapper {
      display: flex;
      align-items: center;

      .author-img {
        border: 0;
      }

      svg {
        width: 20px;
        padding: 4px;
      }

      @media screen and (max-width: 650px) {
        flex-direction: column;
        .button-wrapper {
          margin: 20px auto 0;
        }
        .video-p-detail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .video-p {
          margin-right: 0;
        }
      }
    }
    &-sub {
      font-size: 12px;
    }
    &-title {
      font-size: 24px;
      color: #fff;
      line-height: 1.4em;
      margin: 16px 0 20px;
    }
    &-subtitle {
      font-size: 14px;
      line-height: 1.5em;
      max-width: 60ch;

      & + & {
        margin-top: 16px;
      }
    }
    &-name {
      margin-bottom: 8px;
      color: #fff;
      display: flex;
      align-items: center;

      &:after {
        content: '';
        width: 6px;
        height: 6px;
        background-color: #22b07d;
        border-radius: 50%;
        margin-left: 8px;
        display: inline-block;
      }

      &.offline:after {
        background-color: #ff7551;
      }
    }
  }

  .video-content {
    width: 100%;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .like {
    display: flex;
    align-items: center;
    background-color: var(--button-bg);
    color: #fff;
    border: 0;
    font-family: var(--body-font);
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;

    &.red {
      background-color: #ea5f5f;
    }
    svg {
      width: 18px;
      flex-shrink: 0;
      margin-right: 10px;
      padding: 0;
    }
    & + & {
      margin-left: 16px;
    }
  }

  .video-stats {
    margin-left: 30px;
  }

  .video-detail {
    display: flex;
    margin-top: 30px;
    width: 100%;
  }

  .chat-stream {
    flex-grow: 1;
    margin-left: 30px;

    .chat {
      &.video {
        max-height: 414px;
        overflow: auto;

        background-color: ${props =>
          rgba(props.theme.colors.background.dark, 0.4)};
        border-radius: 20px;

        &::-webkit-scrollbar {
          width: 0px;
        }
      }

      &.header {
        display: flex;
        align-items: center;
        padding: 20px;

        font-size: 16px;
        font-weight: 600;

        color: ${props => props.theme.colors.text.light};
        background-color: ${props =>
          rgba(props.theme.colors.background.normal, 0.4)};
        border-bottom: 1px solid
          ${props => rgba(props.theme.colors.background.dark, 0.4)};
        backdrop-filter: blur(2px);
        border-radius: 20px 20px 0 0;

        position: sticky;
        top: 0;
        left: 0;

        z-index: 1;

        svg {
          width: 15px;
          margin-right: 6px;
          flex-shrink: 0;
        }

        span {
          margin-left: auto;

          color: ${props => props.theme.colors.text.normal};
          font-size: 12px;

          display: flex;
          align-items: center;
        }
      }
      &.footer {
        position: sticky;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;

        width: 100%;
        padding: 0 20px;
        padding-bottom: 12px;
        padding-top: 6px;

        background-color: ${props =>
          rgba(props.theme.colors.background.normal, 0.4)};
        border-radius: 0 0 20px 20px;
        backdrop-filter: blur(2px);

        input {
          width: calc(100% - 20px);
          margin-left: -10px;
          padding: 12px 40px;

          font-size: 12px;
          font-weight: 500;

          background-color: ${props =>
            rgba(props.theme.colors.background.dark, 0.8)};
          color: #fff;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.47 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12zm5.52 1.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.19.54 1.19 1.2 0 .66-.53 1.2-1.19 1.2zM10.8 12c0 .66.54 1.2 1.2 1.2.66 0 1.19-.54 1.19-1.2a1.194 1.194 0 10-2.39 0zm4.48 0a1.195 1.195 0 102.39 0 1.194 1.194 0 10-2.39 0z' fill='%236c6e78'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-size: 24px;
          background-position: 8px;
          border: 0;
          border-radius: 20px;

          &::placeholder {
            color: #6c6e78;
          }
        }

        &:before {
          content: '';
          position: absolute;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-size: 14px;
          background-position: center;
          width: 18px;
          height: 18px;
          background-color: #6c5ecf;
          padding: 4px;
          border-radius: 50%;
          right: 16px;
        }
      }

      &.vid__title {
        color: #fff;
        font-size: 18px;
      }
      &.vid__container {
        margin-top: 40px;
      }
      &.vid__wrapper {
        display: flex;
        align-items: center;
        margin-top: 26px;
      }
      &.vid__name {
        color: #fff;
        font-size: 14px;
        line-height: 1.3em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
      &.vid__img {
        width: 100px;
        height: 80px;
        border-radius: 10px;
        object-fit: cover;
        object-position: right;
        margin-right: 16px;
        transition: 0.3s;
        &.vid:hover {
          transform: scale(1.02);
        }
      }
      &.vid__content {
        max-width: 20ch;
      }
      &.vid__by,
      &.vid__info {
        color: var(--body-color);
        font-size: 13px;
      }
      &.vid__by {
        margin: 6px 0;
      }
      &.vid__button {
        background-color: #6c5ecf;
        border: 0;
        color: #fff;
        font-size: 13px;
        margin-top: 26px;
        display: flex;
        padding: 0 10px;
        align-items: center;
        justify-content: center;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #5847d0;
        }
      }
    }
  }

  .message {
    display: flex;
    align-items: center;

    margin-top: 18px;
    padding: 0 20px;

    &:last-child {
      margin-bottom: 18px;
    }
    &-container .author-img .author-wrapper svg {
      width: 15px;
    }
  }

  .msg {
    &__name {
      font-size: 13px;
    }
    &__content {
      line-height: 1.4em;
      max-width: 26ch;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 940px) {
    flex-direction: column;
    .video-stream {
      width: 100%;
    }
    .chat-stream {
      margin-left: 0;
      margin-top: 30px;
    }
    &.vjs-fluid {
      min-height: 250px;
    }
    .msg__content {
      max-width: 100%;
    }
  }

  //player

  .video-js {
    & .vjs-control-bar {
      display: flex;
      align-items: center;
    }

    .vjs-poster {
      background-size: 150%;
    }

    & .vjs-control-bar {
      width: 100%;
      position: absolute;
      bottom: 14px;
      padding-left: 36px;
      left: 14px;
      width: calc(100% - 28px);
      right: 0;
      border-radius: 10px;
      height: 4em;
      background-color: #2b333f;
      background-color: rgba(43, 51, 63, 0.7);
      @media screen and (max-width: 625px) {
        padding-left: 0;
      }
    }

    &:hover .vjs-big-play-button {
      background-color: rgba(43, 51, 63, 0.5);
    }

    & .vjs-big-play-button {
      transition: 0.3s;
      opacity: 0;
      border: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &:hover {
        background-color: rgba(43, 51, 63, 0.7);
        border-color: transparent;
      }
    }

    .vjs-play-control:after {
      content: 'LIVE';
      position: absolute;
      left: -66px;
      top: 7px;
      background-color: #8941e3;
      height: 24px;
      font-family: var(--body-font);
      font-size: 10px;
      padding: 0 12px 0 26px;
      display: flex;
      font-weight: 700;
      letter-spacing: 0.03em;
      align-items: center;
      border-radius: 6px;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-circle'%3e%3ccircle cx='12' cy='12' r='10'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-size: 6px;
      background-position: 12px;
      @media screen and (max-width: 625px) {
        display: none;
      }
    }

    .vjs-menu-button-inline .vjs-menu {
      top: 4px;
    }

    & .vjs-control:before,
    & .vjs-time-control {
      line-height: 40px;
    }

    & .vjs-tech {
      object-fit: cover;
    }

    button.vjs-play-control.vjs-control.vjs-button {
      margin-left: 40px;
      @media screen and (max-width: 625px) {
        margin-left: 0;
      }
    }

    .vjs-icon-fullscreen-enter:before,
    & .vjs-fullscreen-control:before {
      content: '';
      position: absolute;
      display: block;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.54 0h3.38c1.41 0 2.54 1.15 2.54 2.561V5.97c0 1.42-1.13 2.56-2.54 2.56H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0zm0 11.47h3.38c1.41 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.13 2.56-2.54 2.56H2.54C1.14 20 0 18.85 0 17.44v-3.41c0-1.42 1.14-2.56 2.54-2.56zM17.46 0h-3.38c-1.41 0-2.54 1.15-2.54 2.561V5.97c0 1.42 1.13 2.56 2.54 2.56h3.38c1.4 0 2.54-1.14 2.54-2.56V2.561C20 1.15 18.86 0 17.46 0zm-3.38 11.47h3.38c1.4 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.56 2.54-2.56z' fill='%23fff'/%3e%3c/svg%3e");
      background-size: 11px;
      background-position: center;
      background-position-y: 14px;
      background-repeat: no-repeat;
      opacity: 0.6;
    }

    .vjs-playback-rate .vjs-playback-rate-value {
      font-size: 1.1em;
      line-height: 3.5em;
      opacity: 0.6;
      font-weight: 700;
      font-family: var(--body-font);
    }

    & .vjs-playback-rate {
      width: 2.2em;
    }

    &.vjs-fluid {
      border-radius: 20px;
      overflow: hidden;
      min-height: 414px;
    }
  }
`
