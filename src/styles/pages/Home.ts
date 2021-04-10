import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  height: 100%;
  padding: 20px 30px 30px;
  margin-bottom: 90px;

  border: 1px solid ${props => rgba(props.theme.colors.text.light, 0.2)};
  background: ${props => rgba(props.theme.colors.background.dark, 0.4)};

  overflow: auto;

  .anim {
    animation: bottom 0.8s var(--delay) both;
  }

  .header {
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    padding-bottom: 20px;
    position: sticky;
    top: 0;
    left: 0;
    /* background: linear-gradient(
      to bottom,
      #1f1d2b 0%,
      #1f1d2b 78%,
      rgb(31 29 43 / 0%) 100%
    ); */
    z-index: 11;
  }

  .author {
    &-img {
      width: 52px;
      height: 52px;
      border: 1px solid rgb(255 255 255 / 75%);
      padding: 4px;
      border-radius: 50%;
      object-fit: cover;
      &__wrapper {
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
  }

  .seperate {
    width: 3px;
    height: 3px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 6px;
    &.video-seperate {
      background-color: ${props => props.theme.colors.text.dark};
    }
  }

  .small-header {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin: 30px 0 20px;
  }
`
export const Blogs = styled.div`
  display: flex;
  align-items: center;

  .blog {
    background: url('https://assets.codepen.io/3364143/skate-removebg-preview.png')
      no-repeat;
    background-size: 80%;
    background-position-x: 150px;
    background-color: #31abbd;

    position: relative;

    display: flex;
    flex-direction: column;
    align-self: stretch;

    width: 65%;
    padding: 30px;

    border-radius: 20px;

    overflow: hidden;
    transition: background 0.3s;

    & + .blog {
      width: 35%;
      margin-left: 20px;

      background-image: url('https://c0.anyrgb.com/images/1020/945/venice-beach-2018-outdoors-sport-men-jumping-desert-sunset-extreme-sports-one-person-action.jpg');
      background-color: unset;
      background-position-x: 0;
      background-size: 139%;
      filter: saturate(1.4);

      .author-img {
        border-color: rgb(255 255 255 / 75%);
        margin-top: 14px;
      }
      .author-img__wrapper svg {
        border-color: #ffe6b2;
        color: #e7bb7d;
      }
      .author-detail {
        margin-left: 0;
      }
    }

    .blog_author {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      &.tips {
        flex-direction: column-reverse;
        align-items: flex-start;
      }
    }
    .blog__title {
      font-size: 25px;
      max-width: 12ch;
      font-weight: 600;
      letter-spacing: 1px;
      color: #fff;
      margin-bottom: 30px;
    }
    .blog_time {
      background: rgba(21, 13, 13, 0.44);
      color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }

  @media screen and (max-width: 905px) {
    .blog,
    .blog + .blog {
      width: 50%;
      padding: 30px;
    }
    .blog {
      background-size: cover;
      background-position-x: center;
      background-blend-mode: overlay;
    }
  }
  @media screen and (max-width: 735px) {
    flex-wrap: wrap;

    .blog,
    .blog + .blog {
      width: 100%;
    }
    .blog + .blog {
      margin-left: 0;
      margin-top: 20px;
      background-size: cover;
    }
  }
`
export const Videos = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .video {
    position: relative;

    background: linear-gradient(
      90deg,
      ${props => rgba(props.theme.colors.text.light, 0.2)},
      ${props => rgba(props.theme.colors.text.light, 0.1)}
    );
    /* box-shadow: 0px 0px 10px 0px
      ${props => rgba(props.theme.colors.text.light, 0.4)}; */
    border: 1px solid
      ${props => rgba(props.theme.colors.background.normal, 0.4)};
    border-radius: 20px;

    overflow: hidden;
    transition: 0.4s;

    &:hover {
      transform: scale(1.02);
      background: ${props => rgba(props.theme.colors.background.dark, 0.4)};
    }

    .wrapper {
      position: relative;
    }
    .name {
      position: relative;
      padding: 12px 20px 0;

      font-size: 16px;
      line-height: 1.4em;

      background-color: transparent;
      color: #fff;

      overflow: hidden;
      z-index: 9;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .view {
      padding: 12px 20px 20px;

      font-size: 12px;

      background-color: transparent;

      position: relative;
    }
    .by {
      display: inline-flex;
      position: relative;
      padding: 20px 20px 0px;

      transition: 0.3s;

      &:before {
        position: absolute;
        top: 26px;
        right: 5px;

        content: '';
        width: 6px;
        height: 6px;

        background-color: #22b07d;
        border-radius: 50%;
      }

      &.offline:before {
        background-color: #ff7551;
      }
    }

    .time {
      position: absolute;
      top: 10px;
      right: 8px;
      padding: 3px 8px;

      background: rgba(21, 13, 13, 0.44);
      border-radius: 6px;
      color: rgb(255 255 255 / 85%);

      font-size: 12px;

      z-index: 1;
    }

    &:hover {
      video {
        transform: scale(1.6);
        transform-origin: center;
      }

      .time {
        display: none;
      }

      .author {
        bottom: -65px;
        transform: scale(0.6);
        right: -3px;
        z-index: 10;
      }

      .by {
        opacity: 0;
      }
    }
    .author {
      position: absolute;
      right: 10px;
      bottom: -25px;

      transition: 0.4s;

      svg {
        border-color: ${props => props.theme.colors.background.light};
        background-color: #0aa0f7;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 735px) {
    grid-template-columns: 1fr;
  }
`
