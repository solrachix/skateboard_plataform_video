import styled from 'styled-components'

export default styled.div.attrs(() => ({
  id: 'layout'
}))`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  margin: 0 auto;
  /* padding: 90px 0 0 0; */
  margin-top: 90px;

  overflow-y: auto;
`
