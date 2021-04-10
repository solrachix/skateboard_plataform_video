import styled from 'styled-components'

export const Container = styled.div`
  width: 52px;
  height: 52px;

  &.author-wrapper {
    position: relative;
    flex-shrink: 0;

    svg {
      width: 16px;
      padding: 2px;

      background-color: #0daabc;
      border: 2px solid ${props => props.theme.colors.tertiary};
      color: #fff;
      border-radius: 50%;

      position: absolute;
      bottom: 5px;
      right: 0;
    }
  }
  .author-img {
    width: 52px;
    height: 52px;
    border: 1px solid rgb(255 255 255 / 75%);
    padding: 4px;
    border-radius: 50%;
    object-fit: cover;
  }
`
