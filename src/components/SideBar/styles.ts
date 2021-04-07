import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  /* position: fixed;
  width: 60px;
  height: 100vh;
  padding: 6px 0px;

  background: ${props => rgba(props.theme.colors.background.dark, 0.6)};
  border-right: 1px solid
    ${props => rgba(props.theme.colors.background.dark, 0.9)};
  backdrop-filter: blur(5px);

  display: grid;
  grid-template-rows: 15% 75% 10%;
  grid-template-columns: 100%;

  justify-content: center;
  align-items: flex-start;

  z-index: 15;

  .logo {
    width: 100%;
    margin-left: 4.5px;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    a {
      width: fit-content;
      margin: 0.6rem 0px;

      svg {
        width: 1.3rem;
        height: 1.3rem;

        color: ${props => props.theme.colors.primary.normal};

        cursor: pointer;
      }

      &.actived {
        &:after {
          position: absolute;
          content: '';
          width: 0.2rem;
          height: 1.8rem;
          left: 56px;
          margin-top: -0.25rem;

          background: ${props => props.theme.colors.secondary};
        }
        svg {
          color: ${props => props.theme.colors.secondary};
        }
      }
    }
  } */

  width: 220px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
  .logo {
    display: none;
    width: 30px;
    height: 30px;
    background-color: #22b07d;
    flex-shrink: 0;
    color: #fff;
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    &-expand {
      text-decoration: none;
      color: #fff;
      font-size: 19px;
      font-weight: 600;
      line-height: 34px;
      position: sticky;
      top: 0;
      &:before {
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        background: ${props => props.theme.colors.background.normal};
        width: 200px;
        height: 70px;
        z-index: -1;
      }
    }
  }
  &-link {
    &:hover,
    &.is-active {
      color: #fff;
      font-weight: 600;
      &:nth-child(2n + 1) {
        svg {
          background: #ff7551;
        }
      }
      &:nth-child(2n) {
        svg {
          background: #32a7e2;
        }
      }
      &:nth-child(2n + 3) {
        svg {
          background: #6c5ecf;
        }
      }
    }
  }
  &.collapse {
    width: 90px;
    border-right: 1px solid rgb(128 129 145 / 24%);
    .logo-expand,
    .side-title {
      display: none;
    }
    .logo {
      display: flex;
    }
    .side-wrapper {
      width: 30px;
    }
    .side-menu svg {
      margin-right: 30px;
    }
  }

  .side-wrapper {
    border-bottom: 1px solid rgb(128 129 145 / 24%);
    padding: 36px 0;
    width: 145px;
    & + & {
      border-bottom: none;
    }

    .side-title {
      font-size: 12px;
      letter-spacing: 0.07em;
      margin-bottom: 24px;
    }
    .side-menu {
      display: flex;
      flex-direction: column;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${props => props.theme.colors.text.dark};
        & + a {
          margin-top: 26px;
        }
      }
      svg {
        width: 30px;
        padding: 8px;
        border-radius: 10px;
        background-color: ${props => props.theme.colors.background.lighter};
        flex-shrink: 0;
        margin-right: 16px;
        &:hover {
          color: ${props => props.theme.colors.text.light};
        }
      }
    }
  }
`
