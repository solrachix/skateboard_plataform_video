import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  position: fixed;
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
  }
`
