import { ReactElement } from 'react'

import { Container } from './styles'

interface AvatarProps extends HTMLDivElement {
  img: string
}

function Avatar({ img, className, ...props }: AvatarProps): ReactElement {
  return (
    <Container className={`author-img author-wrapper  ${className}`} {...props}>
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
      <img className="author-img" src={img} />
    </Container>
  )
}

export default Avatar
