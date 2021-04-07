import styled from 'styled-components'

export default styled.div.attrs(() => ({
  id: 'layout'
}))`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  margin: 0 auto;
  padding: 0 0 0 60px;

  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 0 0 0 0;
  }
`
