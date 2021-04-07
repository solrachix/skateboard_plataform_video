import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import routes from '@/routes'
import { Container } from './styles'

const SideBar: React.FC = () => {
  const router = useRouter()

  return (
    <Container className="sidebar">
      {/* <Logo className="logo" /> */}

      <div className="icons">
        {routes.map(props => (
          <Link key={props.route} href={props.route}>
            <a className={router.pathname === props.route ? 'actived' : ''}>
              {props.icon({})}
            </a>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default SideBar
